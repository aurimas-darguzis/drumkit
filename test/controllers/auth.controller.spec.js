const assert = require('assert')
const authController = require('../../controllers/auth.controller')
const expect = require('chai').expect
const should = require('chai').should()

describe('AuthController', function () {
  beforeEach(function settingUpRoles() {
    console.log('running before each')
    authController.setRoles(['user'])
  })
  describe('isAuthorized', function () {
    it('Should return false if not authorized', function () {
      const isAuth = authController.isAuthorized('admin')
      expect(isAuth).to.be.false
    })
    it('Should return true if authorized', function () {
      authController.setRoles(['user', 'admin'])
      const isAuth = authController.isAuthorized('admin')
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
})