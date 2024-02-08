const accountId = 144; // We can not change this

let accoutEmail = "iam@gmail.com";

var accountPass = "dipti123"; //We are not Using this because of issue in block scope & functional scope problem

accountCity = "jajpur"; //It is possible but not use this
// accountId=4839   Not Allowed

let accountState; // By default it is set to undefine

console.log(accountId);

console.table([accountId, accoutEmail, accountPass, accountCity,accountState]);
