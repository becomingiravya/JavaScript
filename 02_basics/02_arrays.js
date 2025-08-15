const marvelHeroes = ["ironman", "Captain America", "thor", "captain marvel"];
const dcHeroes = ["superman", "flash", "batman"];

// ways to join arrays



// ONE 

//marvelHeroes.push(dcHeroes)

//console.log(marvelHeroes); // this pushes one array into another array as a subarray 

// if you wanna access those elements in the subarray this is how to do it

//console.log(marvelHeroes[4][2]);



// TWO 

//const allHeroes = marvelHeroes.concat(dcHeroes);
//console.log(allHeroes); // don't use push earlier if you want concat to work properly



// THREE

const allNewHeroes = [...marvelHeroes, ...dcHeroes];
console.log(allNewHeroes);



// FOUR

const anotherArray = [1,2,3,[4,5,6],7,[8,9,[10,11,12]]];
const real_anotherArray = anotherArray.flat(Infinity);
console.log(real_anotherArray) // you need to define till wghat depth you wanna make it flat. For convenience you can use infinity.



// FIVE

console.log(Array.isArray("lumishka")) // this asks whether given thin in the bracket is array or not
console.log(Array.from("lumishka"))  // this converts whatever is in the bracket into an array

// INTERESTING
console.log(Array.from({name:"lumishka"}))  // this returns an empty array cuz the method doesn't know what to do as nothing is specified.


// SIX

const score1 = 100;
const score2 = 300;
const score3 = 500;

console.log(Array.of(score1,score2,score3));
