// FOR OF LOOP

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

for (const i of arr) {
     //console.log(i);
     
}


const greetings = "Hello World"

for(const i of greetings){
    //console.log(`Each char is ${i}`);
}



// MAPS

const map  = new Map()
map.set('IN', "INDIA")
map.set('UK', "UNITED KINGDOM")
map.set('US', "UNITED STATES")
map.set('FR', "FRANCE")
map.set('IN', "INDIA") // won't be published because maps contain unique entries

console.log(map)

for(const i of map){  // this will print the whole map like an array so if you want to hold key and values differently write them inside bracket 
    // separated by comma
    console.log(i)
}

for (const [i, j] of map){
    console.log(i)
    console.log(j)
    console.log(i, j)   // notice that it won't print keys of all then values of all then both of all instead it will print key of one
    //  then its value then both followed by another

}


const myObj = {
    'game1' : "Among Us",
    'game2' : "Minecraft",
    'game3' : "GTA: VICE CITY"
}

// for (const i of myObj){   // won't work cuz object is not iterable
//     console.log(i)
// }


const myObj2 = {
    game1 : "Among Us",
    game2 : "Minecraft",
    game3 : "GTA: VICE CITY"
}

for(const [i,j] of myObj2){
    console.log(i)
}