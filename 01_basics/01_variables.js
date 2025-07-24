const accountId = 13322;
let accountEmail = "lumishka@google.com";
var accountPassword = "12345";
accountCity = "LA";
let accountState;

//accountId = 2;       //not allowed
console.log(accountId);

accountEmail = "something@something.com";
accountPassword = "282828282811";
accountCity = "New Delhi";

console.log(accountEmail);


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
why use let and not var?
Because of issue in block scope and functional scope.
*/