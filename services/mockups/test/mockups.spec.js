var routes = require('../src/routes/mockups')
var request = require('supertest')
var express = require('express')
var sinon = require('sinon')
var expect = require('chai').expect
var Mockup = require('../src/db/connection')

const app = require('express')

describe('mockup routes', () => {
  beforeEach(() => {

  })

  afterEach(() => {

  })

  it('signUrl', () => {
    request(app)
      .get('/signUrl')
  })

  it('addMockup', () => {
    request(app)
  })

  it('getMockup', () => {
    request(app)
  })
})
