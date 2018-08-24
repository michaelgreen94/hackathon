export default class User {
    constructor(data) {
        this.userName = data.username
        this.pin = data.pin
        this._id = data._id
    }
}