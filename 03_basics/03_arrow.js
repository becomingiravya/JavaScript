const user = {
    username: "lumishka", 
    price: 999,

    welcomeMessage: function() {
        //console.log(`Hi ${username}, welcome to website!`); // even though this works this is not how its done. when you are referring to current 
        // context please use the this keyword.


        console.log(`Hi ${this.username}, welcome to website!`); // this is correct.

       // console.log(this);   // this will print the whole object
    }
}

//user.welcomeMessage()

//user.username = "iravya";

//user.welcomeMessage();

//console.log(this); // this will print an empty object {} because there is no context however if its done in the browser it will show windows objects
// because that is the most global object in the browser



function cheese(){
    let username = "lumishka"
    console.log(this.username); // this will print undefined because this is apparently not working inside a fucntion and only works inside an object.
}

cheese();


const one = function(){
    let username = "lumishka"
    console.log(this.username); // this will again show undefined so to prevent this we use arrow function
}

one()


 const two = () => {
    let username = "lumishka"
    console.log(this.username); // but this also prints undefined 
    console.log(this) // and this prints an empty object
 }


 two()



 //  BASIC SYNTAX OF ARROW FUNCTION : EXPLICIT RETURN

const addTwo = (num1, num2) => {

    return num1+num2

}

console.log(addTwo(3,4)) 


// ANOTHER BASIC SYNTAX OF ARROW FUNCTION : IMPLICIT RETURN 

// IMPLICIT RETURN: when you remove the parentheses and move the return function to the same line and no need to write return keyword


// const addThree = (num1, num2, num3) => num1+num2+num3

// OR 

//const addThree = (num1, num2, num3) => (num1+num2+num3)

//console.log(addThree(5,9,1))


// NOTE: If curly braces get used then you have to write return keyword. But if parentheses are used then don't have to write return keyword.

// TO RETURN AN OBJECT YOU HAVE TO WRAP IT IN PARENTHESES

const addThree = (num1, num2, num3) => {{username= "lumishka"}}

console.log(addThree(5,9,1)) // this will return undefined cuz ofc


const myArray = [2,3,5, 7,8]

//myArray.forEach(function () {})

// OR 

//myArray.forEach(() => {})

// OR 

//myArray.forEach(() => ())


