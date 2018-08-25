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
    return `
<div class="post">
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
  <button class="post-content" onclick="app.controllers.post.showComments('${this._id}')">View Comments</button>
  <div id="add-comment-${this._id}">
  <button onclick="app.controllers.comment.addComment('${this._id}')">Add Comment</button>
  </div>
  <div>
  <button onclick="app.controllers.comment.removePost('${this._id}', app.controllers.post.getPosts)">Remove Post</button>
  </div>
  <div id="comments-${this._id}"></div>
</div>
        `
  }
  showComments() {
    let template = ''
    this.comments.forEach(comment => {
      template += comment.commentTemplate
    })
    let elem = document.getElementById(`comments-${this._id}`)
    elem.innerHTML = template
  }
}