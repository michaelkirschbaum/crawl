var queries = require('../src/db/queries')
var request = require('supertest')
var express = require('express')

const app = require('express')

describe('mockups', () => {
  it('signUrl', () => {
    request(app)
  })

  it('addMockup', () => {
    request(app)
  })

  it('getMockup', () => {
    request(app)
  })
})
