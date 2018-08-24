export default class Post {
    constructor(data) {
        this.description = data.description
        this.userId = data.userId
        this.imgUrl = data.imgUrl
        this.timeStamp = data.timestamp
    }

    get postTemplate() {
        return `
        <div id="post">
          <div>
            <h1>Mr Nobody</h1>
            <h4>Timestamp: ${this.timeStamp}</h4>
          </div>  
          <div>
            <p>${this.description}</p>
          </div>
          <div>
            <h4>Comments</h4>
            <h4>Votes</h4>
          </div>
        </div>
        `
    }
}