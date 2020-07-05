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

const onDeletePost = (event) => {
  // print our target  our delete button
  console.log('line 28 events', event.target)
  // prevent the default
  event.preventDefault()
  // set the id as a variable
  // point it to the event target's data-id and get the id as a string
  const id = $(event.target).data('id')
  console.log(id, 'line 35')
  api.deletePost(id)
    .then(function () {
      onGetPosts(event)
    })
    .catch(ui.deletePostFail)
}

const addHandlerBar = () => {
  $('#get-user-posts').on('click', onGetPosts)
  $('.content').on('click', '.remove-post', onDeletePost)
}

module.exports = {
  onCreatePost: onCreatePost,
  addHandlerBar: addHandlerBar
}
