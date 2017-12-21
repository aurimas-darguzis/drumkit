const assert = require('assert')
const should = require('chai').should()

describe('Basic Mocha Test', function () {
  it('should throw errors', function () {
    const obj = {task: 'testing', inProgress: true}
    obj.should.have.property('task').equal('testing')
  })

  it('should allow testing nulls', function () {
    const iAmNull = null
    should.not.exist(iAmNull)
  })
})