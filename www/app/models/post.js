export default class Post {
  constructor(data) {
    this._id = data._id
    this.description = data.description
    this.userId = data.userId
    this.imgUrl = data.imgUrl
    this.timestamp = data.timestamp
    this.username = data.username
    this.vote = data.vote
    this.comments = []
  }

  get postTemplate() {
    return `
        <div id="post" onclick="app.controllers.comment.drawComments('${this._id}')">
          <div>
            <h1>${this.username}</h1>
            <h4>Timestamp: ${this.timestamp}</h4>
          </div>  
          <div>
            <p>${this.description}</p>
          </div>
          <div>
            <h4>${this.vote}</h4>
            <i class="fas fa-arrow-up" onclick="app.controllers.post.upvote()" type="submit" title="upvote"></i>
            <i class="fas fa-arrow-down" onclick="" type="submit" title="downvote"></i>
          </div>
            <div id="comments-${this._id}"></div>
            </div>
            <div id="add-comment">
              <button onclick="app.controllers.comment.addComment('${this._id}')">Comment</button>
            </div>
            </div>
        `
  }
}