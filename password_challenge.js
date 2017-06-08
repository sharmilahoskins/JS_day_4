
//password checker
var passed = {valid: "true"}
var failed = {valid: "false",
              reason: "Username should not include !"
            }
var failed2 = {valid: "false",
              reason: "Username should not include #"
              }
var failed3 = {valid: "false",
              reason: "Username should not include $"
              }
var failed4 = {valid: "false",
              reason: "Username should contain atleast 6 characters"
              }
function createUser(user, pass) {
  return{
    Username: user,
    Password: pass,
    checkUser: function() {
      if (user.length >= 6 && !user.includes("!") && !user.includes("#") && !user.includes("$")) {
        return passed;
      } else {
        if (user.includes("!")){
        console.log(failed);
        }
        if (user.includes("#")){
        console.log(failed2);
        }
        if (user.includes("$")){
        console.log(failed3);
        }
        if (user.length < 6){
        console.log(failed4);
        }
      }
    },
    checkPassword: function() {
        return pass.length >= 6 && ( pass.includes("!") || pass.includes("#") || pass.includes("$") )
    }
  }
}
