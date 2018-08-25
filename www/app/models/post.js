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
    let template = ""
    this.comments.forEach(comment => {
      template += comment.commentTemplate
    })
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
            <i class="fas fa-arrow-up" onclick="app.controllers.post.upvote(event, '${this._id}')" type="submit" title="upvote"></i>
            <i class="fas fa-arrow-down" onclick="app.controllers.post.downvote(event, '${this._id}')" type="submit" title="downvote"></i>
          </div>
            <div id="comments-${this._id}">${template}</div>
            </div>
            <div id="add-comment-${this._id}">
              <button onclick="app.controllers.comment.addComment('${this._id}')">Comment</button>
            </div>
            </div>
        `
  }
}