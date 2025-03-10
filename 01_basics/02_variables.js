const accountId = 1444533
let accountEmail = "sidhappa@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 const change is not allowed

accountEmail = "sid@gmail.com";
accountCity = "Bangalore"
let accountState;

console.log(accountState);

/*
Prefer not to use var
because of issue in block and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])


