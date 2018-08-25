export default class Comment {
  constructor(data) {
    this.description = data.description
    this.userId = data.userId
    this.postId = data.postId
    this.imgUrl = data.imgUrl
    this.timeStamp = data.timestamp
    this.vote = data.vote
    this.userName = data.userName
  }

  get commentTemplate() {
    return `
        <div id="comment">
          <div>
            <h5>${this.userName}</h5>
            <h2>Timestamp: ${this.timeStamp}</h2>
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