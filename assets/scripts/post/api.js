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

const commentPost = (data) => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/comment',
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
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/post/' + postId,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updatePost = function (postData, id) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/post/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: postData
  })
}

module.exports = {
  newPost: newPost,
  getPosts: getPosts,
  deletePost: deletePost,
  updatePost: updatePost,
  commentPost: commentPost
}
