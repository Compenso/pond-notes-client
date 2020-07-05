'use strict'
const config = require('./../config')
const store = require('./../store')

const newPost = (data) => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/post',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const getPosts = function () {
  console.log('here at the api', store.user)
  // store.user.post won't work because the user hasn't logged in yet
  // console.log('api', store.user.post)
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/post',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const deletePost = function (postId) {
  console.log('api 29', postId)
  console.log('hello no id.')
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/post/' + postId,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  newPost: newPost,
  getPosts: getPosts,
  deletePost: deletePost
}
