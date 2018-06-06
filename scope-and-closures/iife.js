var User = (function UserModule() {
  var user = {
    login: "name",
    password: "pass"
  };

  return user;
})();

console.log(User.login + " " + User.password);
