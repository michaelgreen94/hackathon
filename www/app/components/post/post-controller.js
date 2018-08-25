import Store from "../../store/store.js"


let store = new Store()

let elem = document.getElementById('app')

function drawPosts() {
  console.log(10)
  let posts = store.state.posts
  let template = ""
  for (let postId in posts) {
    template += posts[postId].postTemplate
  }
  elem.innerHTML = template
}

export default class PostController {
  constructor() {

  }
  getPosts() {
    console.log(5)
    store.getPosts(drawPosts)
  }

}