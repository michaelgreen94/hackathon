import User from "../models/user.js"

// @ts-ignore
const server = axios.create({
    baseURL: '//localhost:3000',
    timeout: 3000
})

let store

// SINGLE SOURCE OF TRUTH 
let state = {
    user: {}
}

function setState(prop, data) {
    state[prop] = data
}

export default class Store {
    createUser(creds) {
        server.post('/api/users/register', creds)
            .then(res => {
                setState('user', new User(creds))
            })
            .catch(console.error)
    }

    loginUser(creds, drawUser) {
        server.get('/api/users/login', creds)
            .then(res => {
                drawUser()
            })
            .catch(err => {
                alert('INVALID LOGIN')
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