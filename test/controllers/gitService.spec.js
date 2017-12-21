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
const PassThrough = require('stream').PassThrough

chai.should()
const gitService = require('')()

describe('GitService', function () {
  descibe('GetUser', function () {
    beforeEach(function () {
      this.request = sinon.stub(https, 'request')
    })
    it('should return user and repos', function () {
      this.timeout(10000)
      const gitJson = {login: 'someuser'}
      const gitResponse = new PassThrough()
      gitResponse.write(JSON.stringify(gitJson))
      gitResponse.end()

      // callsArgWith is going to call [1] passing it gitResponse.
      this.request.callsArgWith(1, gitResponse).returns(new PassThrough())

      return gitService.getUser('someuser').then(
        function (user) {
          user.login.should.equal('someuser')
          user.should.have.property('repos')
        }
      )
    })
    afterEach(function() {
      this.request.restore()
    })
  })
})