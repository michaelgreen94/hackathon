import User from "../models/user.js"

const register = axios.create({
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
    login(creds) {
        register.post('/api/users/register')
            .then(res => console.log(res))
            .then(data => {
                setState('user', new User(data))
            })
            .catch(console.error)
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