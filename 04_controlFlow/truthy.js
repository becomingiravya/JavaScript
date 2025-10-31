const userEmail = "lumishka.ai"

if(userEmail){
    console.log("Got user email") // got
} else{
    console.log("Don't have user email");
}


const userEmail2 = ""

if(userEmail2){
    console.log("Got user email")
} else{
    console.log("Don't have user email"); // don't have
}


const userEmail3 = []

if(userEmail3){
    console.log("Got user email") // got
} else{
    console.log("Don't have user email");
}


// falsy values (assumed to be false)

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values (assumed to be true)
// "0", 'false', " ", [], {}, function(){}

if(userEmail3.length === 0){
     console.log("Array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length == 0){
     console.log("Object is empty")
}


// false == 0 // will give true

// false == '' // will give true

// 0 == '' // will give true 




// NULLISH COALESCING OPERATOR (??)

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 20
//val1 = undefined ?? 10
val1 = null ?? 10 ?? 20

console.log(val1);


// TERNARY OPERATOR

const teaPrice = 200

teaPrice >=100 ? console.log("price is more than 100") : console.log("price is less than 100");
