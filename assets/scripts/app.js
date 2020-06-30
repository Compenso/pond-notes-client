'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const userEvent = require('./user/events')

$(() => {
  $('#sign-up').on('submit', userEvent.onSignUp)
  $('#sign-in').on('submit', userEvent.onSignIn)
  $('#change-password').hide()
  $('#change-password').on('submit', userEvent.onChangePassword)
  $('#logout').hide()
  $('#logout').on('click', userEvent.onSignOut)
})
