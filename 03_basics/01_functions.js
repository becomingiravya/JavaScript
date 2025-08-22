// How to declare a function??



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

//const result2  = addThreeNumbers2(4, 5, 6);

//console.log("result: ", result2);



function loginUserMessage(username){
    console.log(`${username} just logged in.`)
}

//console.log(loginUserMessage("lumishka")) // this will return "lumishka just logged in" and then undefined. Why undefined? Because 
// you didn't return anything.

function loginUserMessage2(username){
    return (`${username} just logged in.`)
}

//console.log(loginUserMessage2("lumishka")) // this will return "lumishka just logged in".

// BUT WHAT IF...

// THERE WAS AN EMPTY STRING

//console.log(loginUserMessage2("")) // this will return " just logged in."


// AGAIN WHAT IF... 

// THERE WAS NOTHING.

//console.log(loginUserMessage2());  // this will return "undefined just logged in."

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

//console.log(loginUserMessage3());  // this will return "enter a valid username" and then undefined.


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





// ******************************************************** MORE ABOUT FUNCTIONS ***************************************************************

// THE REST OPERATOR

function calculateCartPrice(num1){
return num1;
}

//console.log(calculateCartPrice(200,399,88900));  // see here's the problem. because only one parameter has been passed into the function but more
// than one argument has been given to the function it will print only the first argument and leave the rest. 

// To prevent this we use the rest (...) operator. 

// The rest operator looks the same as the spread operator , however it depends on the use case whether it will be rest operator or spread operator

// SO NOW 

function calculateCartPrice2(...num1){
    return num1;
}

//console.log(calculateCartPrice2(200,500,900,99988));  // now all of these values will be passed into an array because of the rest operator.


// what if there were already more values as parameters and still there was the rest operator and the return statement was for that only.


function calculateCartPrice3(val1, val2, ...num1){
    return num1;
}

//console.log(calculateCartPrice3(400,4999,3893,222,9999)); // the first two values will go in val1 and val2 and the rest will go in num1.
// Also since the function returns num1 only, val1 and val2 will not be printed.



// OBJECTS PASSED INTO FUNCTIONS 

// This is for when you define an object separately.


const user = {
    username : "someone",
    price: "999"
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

//handleObject(user);


// This is for when you define the object into the function as an argument.

handleObject({
    username: "somebody",
    price: "1000"
})



// ARRAYS PASSED IN OBJECT

// Defining an array and passing it into object as argument.

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));


// passing an array into the function as an argument directly.

console.log(returnSecondValue([200,500,222,222]))