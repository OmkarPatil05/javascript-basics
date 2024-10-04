const accountId = 1;                    // create the variable with the constant value.
let accountEmail = "omkar@google.com";  // creates the variable the scope 
var accountPassword = "Omkar@50";       // create the varialbe with the global scope and not perfferred in modern javascript
accountCity = "Pune";                   // works but not preferred

// accountId = 2; // this is not allowed since it is the const variable. error : TypeError: Assignment to constant variable.

console.log(accountId);

console.table([accountEmail , accountPassword , accountCity ]);

/*
    Prefferd not to use var because of block scope and functional scope issues.
*/
