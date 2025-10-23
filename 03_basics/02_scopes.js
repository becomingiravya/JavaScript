// let a = 10
// const b = 20
// var c = 300 // this is global scope 

// if(true){
//     let a = 10
//     const b = 20 
//     var c = 30 // this is local scope 
// }

// console.log(a);
// console.log(b);
// console.log(c); // this will still print 30 



// let a = 300

// if(true){
//     let a = 10;
//     let b = 40;
//     console.log("Inner: " + a);  // now this prints the inner a value

// }

// // HOWEVER
// console.log(a); // this is outside the local scope and variables declared outside the local scope are in the global scope and hence even
// // if they are declared inside both global and local scope with same or different values, printing the variable will give the global scope value 
// // unless it is printed inside the local scope, then it will give the local scope value only.





function one(){
    
    const username = "lumishka";

    function two(){
       
         const website = "lumishka.com";
         console.log(username);
    }
    // console.log(website); // this will throw an error because it is being called outside the local scope but not defined outside it.

    two();
}

one();



if(true){
    const username = "lumishka";

     if(username==="lumishka"){
        const website = " lumishka.com";
        console.log(username + website);
     }
     //console.log(website); // this will throw an error fs
}

//console.log(username); // this will DEFINITELY throw an error




// *************************************************************** INTERESTING *****************************************************************


// WHILE THIS IS A FUNCTION ONLY 

// and if i do this

console.log(three(5)); // this won't throw an error


function three(num){
     
    return num + 1;

}

console.log(three(5));



// HOWEVER

// THIS IS AN EXPRESSION

// if i do this

addFour(5);  // this WILL throw an error. its a concept called hoisting which we will study later.


const addFour = function four(num){
    
      return num + 1;

}

console.log(addFour(5));

// BOTH WORK THE SAME