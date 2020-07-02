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
  console.log('api', store.post)
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/post',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  newPost: newPost,
  getPosts: getPosts
}
