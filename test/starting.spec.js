const assert = require('assert')

describe('Basic Mocha Test', function () {
  it('should throw errors', function () {
    const obj = {task: 'testing', inProgress: true}
    obj.should.have.property('task').equal('testing')
  })
})