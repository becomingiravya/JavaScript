// How to declare a function??

const { use } = require("react")

function sayMyName(){
    console.log('L')
    console.log('U')
    console.log('I')
    console.log('S')
    console.log('H')
    console.log('K')
    console.log('A')
}

//sayMyName();


function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}

//addTwoNumbers(4, 6); // 10
//addTwoNumbers(4, "6"); // 46
//addTwoNumbers(4, "a"); // 4a
//addTwoNumbers(4, null); // 4



// PARAMETERS V/S ARGUMENTS 

// WHAT IS A PARAMETER?
// When you define a function and pass values into the parenthesis those are called parameters.

// WHAT IS AN ARGUMENT?
// When you call a function and give some values in place of those parameters those are called arguments. 


function addThreeNumbers(a, b, c) {

console.log(a + b + c);

}

//const result = addThreeNumbers(3, 4, 5);  // even though this will print 12 however,
//console.log("result: ", result);  //  this will return undefined. Why? Because when you store a function in a variable you are supposed to give
// it a return value. Otherwise it will return undefined. 

// SO IF WE DO IT PROPERLY THEN

function addThreeNumbers2(a, b , c){
    const result = a + b + c
    return result;
    console.log("something"); // this will not print because by default nothing written after return statement is valid.
}

const result2  = addThreeNumbers2(4, 5, 6);

//console.log("result: ", result2);



function loginUserMessage(username){
    console.log(`${username} just logged in.`)
}

console.log(loginUserMessage("lumishka")) // this will return "lumishka just logged in" and then undefined. Why undefined? Because 
// you didn't return anything.

function loginUserMessage2(username){
    return (`${username} just logged in.`)
}

console.log(loginUserMessage2("lumishka")) // this will return "lumishka just logged in".

// BUT WHAT IF...

// THERE WAS AN EMPTY STRING

console.log(loginUserMessage2("")) // this will return " just logged in."


// AGAIN WHAT IF... 

// THERE WAS NOTHING.

console.log(loginUserMessage2());  // this will return "undefined just logged in."

// TO PREVENT THIS 

function loginUserMessage3(username){

    if(username === undefined){ // === for strict comparison even the datatype.
        console.log("Enter a valid username");
        return; // so that it doesn't print "undefined just logged in" after the above sentence.
    }
    else{
        return `${username} just logged in.`
    }
}

console.log(loginUserMessage3());  // this will return "enter a valid username" and then undefined.


// ************************************** OR ************************************


function loginUserMessage4(username){

    if(!username){ // IMPORTANT
        console.log("Enter a valid username");
        return; 
    }
    else{
        return `${username} just logged in.`
    }
}

console.log(loginUserMessage4());


// ******************************************* OR GIVE A DEFAULT VALUE ************************************

function loginUserMessage5(username = "sam"){  // here

    if(username === undefined){ 
        console.log("Enter a valid username");
        return; 
    }
    else{
        return `${username} just logged in.`
    }
}

console.log(loginUserMessage5());
