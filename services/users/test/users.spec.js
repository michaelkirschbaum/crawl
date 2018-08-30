var routes = require('../src/routes/users')
var request = require('supertest')
var express = require('express')

const app = require('express')

describe('user routes', () => {
  it('addUser', () => {
    request(app)
  })

  it('getUser', () => {
    request(app)
  })
})
