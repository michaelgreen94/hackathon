import Store from "../../store/store.js"


let store = new Store()

let elem = document.getElementById('app')

function drawPosts() {
  let user = store.state.user
  let posts = store.state.posts
  let template = ""
  posts.forEach(post => {
    template += post.postTemplate
  });
  elem.innerHTML = template
}

export default class PostController {
  constructor() {

  }
  getPosts() {
    store.getPosts(drawPosts)
  }

}