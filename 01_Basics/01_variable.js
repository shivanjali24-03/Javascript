const accountId = 1234
let accountEmail = "shivanjalidesai24@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState

// accountId = 2// not allowed with referring to const

accountEmail="sd@gmail.com"
accountPassword = "2323232322"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefreref not to used var 
because of issue in block scope and functional scope 

*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])