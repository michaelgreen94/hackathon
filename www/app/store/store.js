import User from "../models/user.js"
import Comment from "../models/comment.js"

// @ts-ignore
const server = axios.create({
    baseURL: '//localhost:3000',
    timeout: 3000
})

let store

// SINGLE SOURCE OF TRUTH 
let state = {
    user: {},
    comment: []
}

function setState(prop, data) {
    state[prop] = data
}

export default class Store {
    createUser(creds) {
        server.post('/auth/register', creds)
            .then(res => {
                setState('user', new User())
            })
            .catch(console.error)
    }

    loginUser(creds, drawUser) {
        server.post('/auth/login', creds)
            .then(res => {
                console.log('data', res)
                setState('user', new User(res.data))
                console.log(this.state.user)
                drawUser()
                this.getComments()
            })
            .catch(err => {
                console.log(err)
                alert('INVALID LOGIN')
            })
    }

    getComments() {
        server.get('/api/comments/by-user/' + this.state.user.userId)
            .then(res => {
                console.log('comments', res)
            })
    }

    constructor() {
        console.log(this.state.user)

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