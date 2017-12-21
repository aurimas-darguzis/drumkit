const assert = require('assert')
const authController = require('../../controllers/auth.controller')
const expect = require('chai').expect
const should = require('chai').should()
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const sinon = require('sinon')
chai.use(chaiAsPromised)
chai.should()

describe('AuthController', function () {
  beforeEach(function settingUpRoles() {
    console.log('running before each')
    // authController.setRoles(['user'])
  })
  describe('isAuthorized', function () {
    let user = {}
    beforeEach(function () {
      user = {
        roles: ['user'],
        isAuthorized: function (neededRole) {
          return this.roles.indexOf(neededRole) >= 0
        }
      }
      sinon.spy(user, 'isAuthorized')
      authController.setUser(user)
    })
    it('Should return false if not authorized', function () {
      const isAuth = authController.isAuthorized('admin')
      user.isAuthorized.calledOnce.should.be.true
      expect(isAuth).to.be.false
    })
    it('Should return true if authorized', function () {
      authController.setRoles(['user', 'admin'])
      const isAuth = authController.isAuthorized('admin')
      user.isAUthorized.calledOnce.should.be.true
      isAuth.should.be.true
    })
    it('Should not allow a get if not authorized');
    it('Should allow get if authorized')
  })

  describe('isAuthorizedAsync', function () {
    it('Should return false if not authorized', function (done) {
      authController.isAuthorizedAsync('admin',
        function (isAuth) {
          assert.equal(false, isAuth)
          done();
        })
    })
  })

  describe('isAuthorizedPromiose', function () {
    it('Should return false if not authorized', function () {
      return authController.isAuthorizedPromise('admin').should.eventually.be.false

    })
  })

  describe.only('getIndex', function () {
    let user
    beforeEach(function () {
      user = {
        roles: ['admin'],
        isAuthorized: function (neededRole) {
          return this.roles.indexOf(neededRole) >= 0
        }
      }
    })

    it('should render index if authorized', function () {
      const isAuth = sinon.stub(user, 'isAuthorized').returns(true)
      // const isAuth = sinon.stub(user, 'isAuthorized').throws()
      const req = { user: user }
      const res = {
        render: function () {

        }
      }
      const mock = sinon.mock(res)
      mock.expects('render').once().withExactArgs('index')

      authController.getIndex(req, res)
      isAuth.calledOnce.should.be.true
      mock.verify()
      // res.render.calledOnce.should.be.true
      // res.render.firstCall.args[0].should.equal('index')
    })
  })
})