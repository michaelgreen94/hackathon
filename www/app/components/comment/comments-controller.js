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
        template += comment[i].commentTemplate
      }
      document.getElementById('comments-' + postId).innerHTML = template + 'COMMMENTS!!!'
    }
    else {
      document.getElementById('comments-' + postId).innerHTML = ''
      active[postId] = false
    }
  }

  addComment(postId) {
    let template = `
    <form onsubmit="app.controllers.comment.createComment(event)">
    <input type="text" name="description" placeholder="Your text here">
    <button type="submit">Add Comment</button>
    </form>
    `
    document.getElementById('add-comment').innerHTML = template
  }

  createComment(e) {
    console.log(e);

    e.preventDefault();
  }

}