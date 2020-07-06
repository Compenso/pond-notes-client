'use strict'
const store = require('./../store.js')

const signUpSuccess = function (response) {
  // console.log('what is responseData', response.email)
  $('form').trigger('reset')
  $('#message').text('Pond Time!')
  $('#message').show()
  $('#sign-in').show()
  $('#loginHold').hide()

  const newUser = (`
    <h4>userName: ${response.user.email}</h4>
    <br>
    `)
  $('#sign-up').html(newUser)
}

const signUpFail = function () {
  $('form').trigger('reset')
  $('#message').text('User not Created')
  $('#message').show()
  $('#message').removeClass().addClass('failure')
}

const onSignInSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Yo, welcome back.')
  $('#sign-in').hide()
  $('#join').hide()
  $('#sign-up').hide()
  $('#triangle').show()
  $('#logout').show()
  $('.container').show()
  store.user = response.user
}

const onSignInFail = function () {
  $('form').trigger('reset')
  $('#message').text('Yo, wrong-o. Try again.')
}

const onChangePasswordSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Cool, now go post something!')
  $('#change-password').hide()
  $('#triangle').show()
}

const onChangePasswordFail = function () {
  $('form').trigger('reset')
  $('#message').text('Check you password')
}

const onSignOutSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Goodbye!')
  $('#sign-up').show()
  $('#loginHold').show()
  $('#change-password').hide()
  $('#logout').hide()
  store.user = null
}

module.exports = {
  signUpSuccess: signUpSuccess,
  signUpFail: signUpFail,
  onSignInSuccess: onSignInSuccess,
  onSignInFail: onSignInFail,
  onChangePasswordSuccess: onChangePasswordSuccess,
  onChangePasswordFail: onChangePasswordFail,
  onSignOutSuccess: onSignOutSuccess
}
