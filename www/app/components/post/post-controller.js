import Store from "../../store/store.js"


let store = new Store()

let elem = document.getElementById('app')

function drawPost() {
  let user = store.state.user
  let posts = store.state.posts
  let template = ""
  posts.forEach(post => {
    post.postTemplate
  });
  elem.innerHTML = template
}

export default class UserController {
  constructor() {

  }

  createUser(e) {
    e.preventDefault();
    let creds = {
      username: e.target.username.value,
      pin: e.target.pin.value
    }
    store.createUser(creds)
  }