export default class User {
    constructor(data) {
        this.userName = data.username
        this.pin = data.pin
        this.userId = data._id
    }
}