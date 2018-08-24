export default class Comment {
    constructor(data) {
        this.description = data.description
        this.userId = data.userId
        this.imgUrl = data.imgUrl
        this.timeStamp = data.timestamp
        this.vote = data.vote
    }

    get commentTemplate() {
        return `
        <div id="comment">
          <div>
            <h1>Mr Somebody</h1>
            <h4>Timestamp: ${this.timeStamp}</h4>
          </div>
          <div>
            <p>${this.description}</p>
          </div>
          <div>
            <h4>Votes</h4>
          </div>
        </div>
        `
    }
}