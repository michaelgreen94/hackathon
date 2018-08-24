import Store from "../../store/store.js"


let store = new Store()

let elem = document.getElementById('app')

function draw() {

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

}