'use strict'
// requier in the api content, ui, getFormFields, and store
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('./../store')

const onCreatePost = (event) => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.newPost(data)
    .then(ui.newPostSuccess)
    .catch(ui.newPostFail)
}

const onGetPosts = (event) => {
  event.preventDefault()

  api.getPosts()
    .then(ui.getPostsSuccess)
    .catch(ui.getPostsFail)
}

const onDeletePost = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deletePost(id)
    .then(() => ui.deletePostSuccess(id))
    .catch(ui.deletePostFail)
}

const onPostUpdate = (event) => {
  event.preventDefault()
  $('#create-post').hide()
  $('#update-form').show()
  store.postId = $(event.target).data('id')
}

const onPostForm = (event) => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.updatePost(data, store.postId)
    .then(ui.updatePostSuccess)
    .catch(console.error)
}

const onCommentForm = (event) => {
  event.preventDefault()
  $('#create-post').hide()
  $('#comment-form').show()
  // store.postId = $(event.target).data('id')
}

const onCreateComment = (event) => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.commentPost(data)
    .then(ui.commentSuccess)
    .catch(console.error)
}

const addHandlerBar = () => {
  $('#get-user-posts').on('click', onGetPosts)
  $('.content').on('click', '.remove-post', onDeletePost)
  $('.content').on('click', '.edit-post', onPostUpdate)
  $('.content').on('click', '.comment', onCommentForm)
}

module.exports = {
  onCreatePost: onCreatePost,
  addHandlerBar: addHandlerBar,
  onPostForm: onPostForm,
  onCreateComment: onCreateComment
}
