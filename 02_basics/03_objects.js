// objects

// Ways to declare objects :
// There are two ways to declare objects:
// i) as literals
// ii) as constructors

// singleton: if you create an object with the help of a constructor it is called singleton 

// object literals

const user = {
    name: "Lumishka",  // this is a key-value pair where name is the key and "lumishka" is the value. However, this name in the bts is stored as
    // a string so its stored like "name" this.
    age: 20,
    location: "Los Angeles", 
    email : "lumishka@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Thursday"]
}

// There are a few ways to access objects"

// ONE : using the dot operator ofc

console.log(user.email);

// TWO : square brackets can be used as well but there is a rookie mistake people make when writing this

//console.log(user[email]) // this will give you an error. Why? because as told earlier every key is stored as a string so giving it as a variable 
// here won't help

console.log(user["email"]); // this is the correct method.


// we will try something now. Let's declare another object. Check out the second key-value pair here.

const JSuser = {
    name: "Lumishka",
    "full name" : "Lumishka Verma",  // even keys can be written as string no harm there. But there is no way you'll be able to access this pair by
    // the dot operator method
    age: 20,
    location: "Los Angeles", 
    email : "lumishka@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Thursday"]
}

console.log(JSuser["full name"]);

// NOW WHAT IF SOMEBODY TOLD YOU TO DECLARE A SYMBOL AND THEN USE IT IN AN OBJECT AS A KEY. 
// Symbol is a primitive data type.

const mySym = Symbol("key1"); // so this is how you declare a symbol.
const mySym2 = Symbol("key2"); // so this is how you declare a symbol.

// Now to use it in an object as a key, check the second and third key-value pairs

const newObj = {
    name: "Lumishka",
    mySym : 12345,  // see this is not going to work because if you check mySym typeof it will display that mySym is a string here
    [mySym2] : 12345,
    age: 20,
    location: "Los Angeles", 
    email : "lumishka@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Thursday"]
}

console.log(newObj.mySym);
console.log(typeof newObj.mySym); // this will give you an output as a string. 


console.log(newObj[mySym2]);
console.log(typeof newObj[mySym2]); // this will give an output as a symbol.