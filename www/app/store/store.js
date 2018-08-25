import User from "../models/user.js"
import Comment from "../models/comment.js"
import Post from "../models/post.js";


// @ts-ignore
const server = axios.create({
    baseURL: '//localhost:3000',
    timeout: 3000
})

let store

// SINGLE SOURCE OF TRUTH 
let state = {
    user: {},
    comment: [],
    posts: {},
    comments: []
}

function setState(prop, data) {
    state[prop] = data
}

export default class Store {
    createUser(creds, drawUser, getPosts) {
        console.log(2)
        server.post('/auth/register', creds)
            .then(res => {
                console.log(3)
                setState('user', new User(creds))
                drawUser()
                getPosts()
            })
            .catch(console.error)
    }

    loginUser(creds, drawUser, getPosts) {
        console.log(2)
        server.post('/auth/login', creds)
            .then(res => {
                console.log(3)
                //console.log('data', res)
                setState('user', new User(res.data))
                //console.log(this.state.user)
                drawUser()
                getPosts()
            })
            .catch(err => {
                console.log(err)
                alert('INVALID LOGIN')
            })
    }

    getComments(draw) {
        console.log(8)
        server.get('/api/comments')
            .then(res => {
                console.log(9)
                let comments = res.data.map(comm => new Comment(comm))
                comments.forEach(comment => {
                    state.posts[comment.postId].comments.push(comment)
                })
                draw()
            })
    }

    addComment(draw) {
        server.post('/api/comments')
            .then(res => {
                setState('comments', new Comment(res.data))
                draw()
            })
    }

    getPosts(drawPosts) {
        console.log(6)
        server('api/posts')
            .then(res => {
                let posts = res.data.map(rawPost => {
                    return new Post(rawPost)
                })
                //turn post into dictionary
                posts.forEach(post => {
                    state.posts[post._id] = post
                })
                console.log(7)
                this.getComments(drawPosts)
            })
    }

    createComment(draw) {
        server.post('/routes/posts')
            .then(res => {
                setState('comment', new Comment())
            })
    }



    createPost(post, getPosts) {
        post.username = state.user.userName
        post.userId = state.user.userId
        server.post("/api/posts", post)
            .then(getPosts)
    }

    upvote(upvote, getPosts) {
        upvote.username = state.user.userName
        upvote.userId = state.user.userId
        server.post("/api/posts/userId/upvote", upvote)
            .then(getPosts)
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