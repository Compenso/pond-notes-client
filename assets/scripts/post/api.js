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

const commentPost = (data, id) => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/comment/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const getPosts = function () {
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
