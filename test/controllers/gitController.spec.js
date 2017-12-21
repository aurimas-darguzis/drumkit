const GitCtrl = rewire('../../controllers/gitController')
const gitController = GitCtrl()
const chai = require('chai')
const sinon = require('sinon')
chai.should()

describe('gitController', function () {
  beforeEach(function() {
    const gitService = GitCtrl.__get__('gitService')
    this.getUser = sinon.spy(gitService, 'getUser')
    GitCtrl.__set__('gitService', gitService)
  })
  it('should get user and repos from git service', function (done) {
    const req = {params:{userId: 'someUserId'}}
    const res = {json: test}
    
    function test(user) {
      getUser.getCall(0).args[0].should.equal('someUserId')
      getUser.calledOnce.should.be.true
      user.login.should.equal('someUserId')
      done()
    }
    gitController.userGet(req, res)
  })
})
