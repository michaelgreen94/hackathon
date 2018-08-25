import Store from "../../store/store.js";

let store = new Store()

let active = {}

export default class CommentController {
  constructor() {

  }
  drawComments(postId) {
    if (!active[postId]) {
      active[postId] = true
      let comments = store.state.posts[postId].comments
      let template = ""
      for (let i = 0; i < comments.length; i++) {
        const comment = comments[i];
        template += comment.commentTemplate
      }
      document.getElementById('comments-' + postId).innerHTML = template
    }
    else {
      document.getElementById('comments-' + postId).innerHTML = ''
      active[postId] = false
    }
  }

  addComment(postId) {
    let template = `
    <form onsubmit="app.controllers.comment.createComment(event, '${postId}', app.controllers.post.getPosts)">
      <input type="text" name="description" placeholder="Your text here">
    <button type="submit">Add Comment</button>
    </form>
    `
    document.getElementById('add-comment-' + postId).innerHTML = template
  }

  createComment(e, postId, getPosts) {
    console.log(e);
    console.log('state', store.state)
    e.preventDefault();
    let newCom = {
      description: e.target.description.value,
      userId: store.state.user.userId,
      userName: store.state.user.userName,
      postId: postId
    }
    store.createComment(newCom, getPosts)
  }

  removeComment() {

  }

}