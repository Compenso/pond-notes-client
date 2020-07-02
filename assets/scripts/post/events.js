'use strict'
// requier in the api content, ui, getFormFields, and store
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')
// const store = require('./../store')

const onCreatePost = (event) => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.newPost(data)
    .then(ui.newPostSuccess)
    .catch(ui.newPostFail)
}

const onGetPosts = (event) => {
  console.log('line 20 events', event, event.target)
  event.preventDefault()
  api.getPosts()
    .then(ui.getPostsSuccess)
    .catch(ui.getPostsFail)
}

const addHandlerBar = () => {
  $('#get-user-posts').on('click', onGetPosts)
}

module.exports = {
  onCreatePost: onCreatePost,
  addHandlerBar: addHandlerBar
}
