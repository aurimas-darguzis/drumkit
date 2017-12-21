// getUser()
// response.on('end', function () {
//   const user = JSON.parse(str)
//   getRepos(userId, function (repos) {
//     user.repos = repos
//     resolve(user)
//   })
// })
const chai = require('chai')
const sinon = require('sinon')
const https = require('https')

chai.should()
const gitService = require('')()

describe('GitService', function () {
  descibe('GetUser', function () {
    beforeEach(function () {
      this.request = sinon.stub(https, 'request')
    })
    it('should return user and repos', function () {
      return gitService.getUser('someuser').then(
        function (user) {
          user.login.should.equal('someuser')
          user.should.have.property('repos')
        }
      )
    })
  })
})