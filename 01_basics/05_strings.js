const name = "lumishka"
const repoCount = 1

// console.log(name + repoCount + " Value");


console.log(`hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('lumishka-ls-com')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt([4]));
console.log(gameName.indexOf('h'));



const newString = gameName.substring(0,4) //excluding last value
console.log(newString);

const anotherString = gameName.slice(-7,7) //excluding both first and last
console.log(anotherString)


const newStringOne = "    lumishka    ";
console.log(newStringOne)
console.log(newStringOne.trim())


const url = "https://lumishka.com/lumishka%20sum"

console.log(url.replace('%20','-'))


console.log(url.includes('lumishka'))
console.log(url.includes('happy'))


console.log(gameName.split('-'))
