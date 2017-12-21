function AuthController() {

  let roles
  function setRoles(role) {
    roles = role
  }

  function isAuthorized(neededRole) {
    return roles.indexOf(neededRole) >= 0
  }

  function isAuthorizedAsync(neededRole, cb) {
    setTimeout(function () {
      cb(roles.indexOf(neededRole) >= 0)
    }, 0)
  }

  function isAuthorizedPromise(neededRole, cb) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve(roles.indexOf(neededRole) >= 0)
      }, 0)
    })
  }

  function getIndex(req, res) {
    res.render('index')
  }

  return {
    isAuthorized,
    isAuthorizedAsync,
    setRoles,
    isAuthorizedPromise,
    getIndex
  }
}

module.exports = AuthController()