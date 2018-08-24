import Store from "../../store/store.js"


let store = new Store()

let elem = document.getElementById('user')

function drawUser() {
    let user = store.state.user
    let template = `
    <h1>Hello ${user.userName}</h1>
    `
    elem.innerHTML = template
}

export default class UserController {
    constructor() {

    }

    createUser(e) {
        e.preventDefault();
        let creds = {
            username: e.target.username.value,
            pin: e.target.pin.value
        }
        store.createUser(creds)
    }

    loginUser(e) {
        e.preventDefault();
        let creds = {
            username: e.target.username.value,
            pin: e.target.pin.value
        }
        store.loginUser(creds, drawUser)
    }

}