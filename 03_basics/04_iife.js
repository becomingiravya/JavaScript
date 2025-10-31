// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)


function chai(){
    console.log(`DB CONNECTED`)
}

chai() // even though this is correct  its not safe because of global scope you can't use a variable again
// JS puts all variables declared outside a function in the global scope so if in multiple scripts same variable name is there then that will
// cause problems. IIFE's help by creating a private scope so the variables don't leak out.



// CREATING AN IIFE

(function chai(){
    console.log(`DB CONNECTED`);
})()

// SYNTAX OF IIFE

() () // FIRST PARENTHESES FOR DEFINING THE FUNCTION SECOND FOR FUNCTION EXECUTION
















