'use strict'
const store = require('./../store.js')
const showPostsTemplate = require('./../templates/user-posts.handlebars')

const newPostSuccess = (response) => {
  store.post = response.post
  $('form').trigger('reset')
  $('#post-title').text(response.post.title)
  $('#post-content').text(response.post.content)
}

const getPostsSuccess = (response) => {
  store.post = response.post
  console.log(store.post)
  const showPostsHtml = showPostsTemplate({ posts: response.posts })
  $('.content').append(showPostsHtml)
}

module.exports = {
  newPostSuccess: newPostSuccess,
  getPostsSuccess: getPostsSuccess
}
