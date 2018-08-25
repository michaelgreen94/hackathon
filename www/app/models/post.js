export default class Post {
  constructor(data) {
    this._id = data._id
    this.description = data.description
    this.userId = data.userId
    this.imgUrl = data.imgUrl
    this.timestamp = data.timestamp
    this.userName = data.username
    this.vote = data.vote
    this.comments = []
  }

  get postTemplate() {
    return `
        <div id="post">
          <div>
            <h1>${this.userName}</h1>
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