export default class Post {
  constructor(data) {
    this.description = data.description
    this.userId = data.userId
    this.imgUrl = data.imgUrl
    this.timestamp = data.timestamp
    this.username = data.username
    this.vote = data.vote
  }

  get postTemplate() {
    return `
        <div id="post">
          <div>
            <h1>${this.username}</h1>
            <h4>Timestamp: ${this.timestamp}</h4>
          </div>  
          <div>
            <p>${this.description}</p>
          </div>
          <div>
            <h4>${this.vote}</h4>
          </div>
        </div>
        `
  }
}