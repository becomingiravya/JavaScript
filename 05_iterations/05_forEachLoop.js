const coding = ['js', 'ruby', 'python', 'c#', 'flutter' , 'java' , 'cpp']

coding.forEach(  function (i){  // can pass a callback function as parameter to forEach
      //console.log(i);
})


coding.forEach( (i) => {  // can also pass callback arrow function as parameter
    //console.log(i);
})


function printMe(i){  // this is a function 
    //console.log(i);
}
 
//coding.forEach(printMe)  // can also pass a function reference as parameter

coding.forEach(  (i, index, arr) => { // index and arraylist come predefined in the forEach loop 
    console.log(i, index, arr);
    
})

const myCoding = [
    {
        languageName: "javascript",
        languageExtension: 'js'
    }, 
    {
        languageName: "python",
        languageExtension: 'py'
    }, 
    {
        languageName: "c plus plus",
        languageExtension: 'cpp'
    }, 

]



myCoding.forEach( (i) => {   // here i is the item or the object is called item and inside the object there are more things which can be accessed
    // via dot operator
    console.log(i.languageName);
    
})