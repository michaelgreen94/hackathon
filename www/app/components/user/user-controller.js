import Store from "../../store/store.js"


let store = new Store()

let elem = document.getElementById('app')

function drawUser() {
    console.log(4)
    let user = store.state.user
    let template = `
    <h1>Hello ${user.userName}</h1>
    `
    elem.innerHTML = template
}

export default class UserController {
    constructor() {

    }

    createUser(e, getPosts) {
        e.preventDefault();
        console.log(1)
        let creds = {
            username: e.target.username.value,
            pin: e.target.pin.value
        }
        store.createUser(creds, drawUser, getPosts)
    }

    loginUser(e, getPosts) {
        e.preventDefault();
        console.log(1)
        let creds = {
            username: e.target.username.value,
            pin: e.target.pin.value
        }
        store.loginUser(creds, drawUser, getPosts)
    }

}