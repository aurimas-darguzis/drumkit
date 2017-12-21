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

      const repoResponse = new PassThrough()
      repoResponse.write(JSON.stringify(repoJson))
      repoResponse.end()

      // callsArgWith is going to call [1] passing it gitResponse.
      this.request
        .onFirstCall().callsArgWith(1, gitResponse).returns(new PassThrough())
        .onSecondCall().callsArgWith(1, repoResponse).returns(new PassThrough())

        /**
         * Use arrow function here, so 'this' will be bound to request object ^
         * We use 'function' in all above, so we can say 'this.timeout(10000)'
         */
      return gitService.getUser('someuser').then(
         (user) => {
          const params = this.request.getCall(0).args
          params[0].headers['User-Agent'].should.equal('gitExample')
          this.request.getCall(1).args[0].path.should.equal('/users/someuser/repos')
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