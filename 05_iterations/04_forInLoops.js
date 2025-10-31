const myObject = {
    js : 'javascript',
    py : 'python',
    java : 'java',
    sql: 'structured query language'
}

// to iterate through an object use for in loop


// to print keys

for(const i in myObject){
    //console.log(i)
}


// to print values 

for (const i in myObject) {
     //console.log(myObject[i])
}


// to print both

for(const i in myObject){
    //console.log(`${i} full name is ${myObject[i]} `);
    
}



const programming = ['js', 'py', 'rb', 'cpp', 'java', 'c#'];

for (const i in programming) {
      //console.log(programming[i])
}


const map  = new Map()
map.set('IN', "INDIA")
map.set('UK', "UNITED KINGDOM")
map.set('US', "UNITED STATES")
map.set('FR', "FRANCE")
map.set('IN', "INDIA")


for (const i in map) {
    console.log(map[i]);
    
}  // no output cuz maps are not iterable via for in loop