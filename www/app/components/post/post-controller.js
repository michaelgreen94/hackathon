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
  template += `
  <form onsubmit="app.controllers.post.createPost(event)">
  <input type="text" name="post" placeholder="Your Comment">
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
    let creds = {
      description: e.target.post.value,
      imgUrl: e.target.imageUrl.value
    }
    // store.createPost(creds, getPosts)
  }


  getPosts() {
    console.log(5)
    store.getPosts(drawPosts)
  }

}