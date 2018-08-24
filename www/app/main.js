import UserController from "./components/user/user-controller.js"

class App {
    constructor() {
        this.controllers = {
            user: new UserController
        }
    }
}


window.app = new App 