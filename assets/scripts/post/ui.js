'use strict'
const store = require('./../store.js')
const showPostsTemplate = require('./../templates/user-posts.handlebars')

const newPostSuccess = (response) => {
  store.post = response.post
  $('form').trigger('reset')
  $('#post-title').text(response.post.title)
  $('#post-content').text(response.post.content)
}

const commentSuccess = (response) => {
  store.comment = response.comment
  $('form').trigger('reset')
  $('#comment-post').text(response.comment.comment)
}

const getPostsSuccess = (response) => {
  const showPostsHtml = showPostsTemplate({ posts: response.posts })
  $('.content').html('')
  $('.content').append(showPostsHtml)
}

const deletePostSuccess = (id) => {
  $(`[data-id='${id}']`).remove()
}

const updatePostSuccess = () => {
  $('form').trigger('reset')
  $('#update-form').hide()
  $('#create-post').show()
  store.postId = null
}

module.exports = {
  newPostSuccess: newPostSuccess,
  getPostsSuccess: getPostsSuccess,
  deletePostSuccess: deletePostSuccess,
  updatePostSuccess: updatePostSuccess,
  commentSuccess: commentSuccess
}
