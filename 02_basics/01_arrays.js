// array

// ONE

// js arrays are resizable and can have a mix of datatypes for example: 

const newArr = [0,1,2,"three","four"];

// TWO

// how is an array declared?

// i)

const myArr = [0,1,2,3,4,5];

// ii)

const myArr2 = new Array(0,1,2,3,4,5);

// THREE

//  i)  // how to access the element of an array : through its index
// console.log(myArr[2]); 
// console.log(myArr2[3]);

const myHeros = ["shaktiman","spiderman","batman","iron man", "captain america"];

// ii) // how to NOT access the element of an array

//console.log(myHeros["shaktiman"]); // js arrays are not associative and cannot take arbitrary strings as indexes.

// FOUR

// js creates shallow copies
// shallow copy is a copy whose properties share the same reference point means change anything here and it will also change in the original one
// deep copy is a  copy whose properties do not share the same reference point


// FIVE

// Array methods

const someArr = [9,3,0,2,34];
someArr.push(55);
someArr.push(88);
someArr.pop();
someArr.unshift(8);  // unshift pushes the given number in the parenthesis to the front of the array
someArr.shift();     // shift removes an element from the front of the array

//console.log(someArr.includes(0));  // returns a boolean value telling whether the given number is present in the array or  not
//console.log(someArr.includes(98));



const someArr2 = someArr.join(); // this converts all the elements of an array to a string
//console.log(someArr);
//console.log(someArr2);
console.log(typeof(someArr2));


//*************************************************IMPORTANT*******************************************************/

const anArr = [11,22,33,44,55,66,77];
console.log("A ", anArr);
console.log(anArr.slice(3,6));

console.log("B ", anArr);
console.log(anArr.splice(3,6));
console.log("C ", anArr);

// So if someone asks what is the difference bw slice and splice operations in an array don't tell that slice excludes the second parameter 
// while splice includes it. Because that is not true and completely false.

// The main difference is that on logging both slice and splice we'll see that slice just prints the elements starting from the first parameter
// and excluding the last parameter without changing the original array. HOWEVER, on logging it might seem like splice prints including both the first 
// last parameter but in actuality it is cutting out all the elements from first parameter till last parameter and what is left in the original array
// is just what was not included in splice.