// if 


if(true){

}

if(false){

}

const isUserLoggedIn = true

if(isUserLoggedIn){

}

// <,>,<=,>=,==,===, !=, !==


const score = 300

if(score>100){
    let power = "fly"
    console.log(`User power: ${power}`);
}

//console.log(`User power: ${power}`) // won't execute because of scope and also since it is let not var


const balance = 1000;

//if(balance > 500) console.log("test"),  // implicit scope and wrong syntax
//console.log("test2");


if(balance < 500){

      console.log("less than");

} else if(balance < 750){

    console.log("less than 700");

} else if(balance < 900){

    console.log("less than 900");

}
else{

    console.log("less than 1200");

}


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail ){
    console.log("User logged in")
}