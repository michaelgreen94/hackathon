import Store from "../../store/store.js"


let store = new Store()

let elem = document.getElementById('app')
let openPosts = {}

function drawPosts() {
  console.log(10)
  let posts = store.state.posts
  let template = ""
  for (let postId in posts) {
    template += posts[postId].postTemplate
  }
  template += `
  <form onsubmit="app.controllers.post.createPost(event)">
  <input type="text" name="post" placeholder="Your Post">
  <input type="text" name="imageUrl" placeholder="Image-Url">
  <button type="submit">Submit</button>
  </form>
  `
  elem.innerHTML = template
}

export default class PostController {
  constructor() {

  }

  createPost(e) {
    e.preventDefault();
    let post = {
      description: e.target.post.value,
      imgUrl: e.target.imageUrl.value
    }
    store.createPost(post, this.getPosts)
  }

  getPosts() {
    console.log(5)
    store.getPosts(drawPosts)
  }

  upvote(event, postId) {
    event.stopPropagation()
    store.upvote(postId, this.getPosts)
  }

  downvote(event, postId) {
    event.stopPropagation()
    store.downvote(postId, this.getPosts)
  }

  showComments(id) {
    let post = store.state.posts[id]
    if (openPosts[id]) {
      delete openPosts[id]
      document.getElementById('comments-' + id).innerHTML = ''
      return
    }
    openPosts[id] = true
    post.showComments()
  }

}