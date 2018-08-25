import User from "../models/user.js"
import Post from "../models/post.js";
import { get } from "mongoose";

// @ts-ignore
const server = axios.create({
    baseURL: '//localhost:3000',
    timeout: 3000
})

let store

// SINGLE SOURCE OF TRUTH 
let state = {
    user: {},
    posts: [],
    comments: []
}

function setState(prop, data) {
    state[prop] = data
}

export default class Store {
    createUser(creds, getPosts) {
        server.post('/auth/register', creds)
            .then(res => {
                setState('user', new User(creds))
                getPosts()
            })
            .catch(console.error)
    }

    loginUser(creds, drawUser, getPosts) {
        server.post('/auth/login', creds)
            .then(res => {
                setState('user', new User(creds))
                drawUser()
                getPosts()
            })
            .catch(err => {
                console.log(err)
                alert('INVALID LOGIN')
            })
    }

    getPosts(drawPosts) {
        server('api/posts/by-user/' + state.user._id)
            .then(res => {
                let posts = res.data.data.map(rawPost => {
                    return new Post(rawPost)
                })
                drawPosts()
            })
    }

    constructor() {
        if (store) {
            return store
        }
        store = this
    }

    get state() {
        return {
            ...state
        }
    }

}