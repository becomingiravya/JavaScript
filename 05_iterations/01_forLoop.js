// FOR LOOP 

// for(let i = 0; i<10; i++){
//     console.log(i);
// }


for(let i = 1; i<=10; i++){
    //console.log(`Table of: ${i}`);

    for(let j = 1; j<=10; j++){
      //  console.log(`${i} * ${j} = ${i*j}`)
    }
}

const myHeroes = ["flash", "batman", "superman", "ironman"]

for(let i =  0; i<myHeroes.length; i++){
    //console.log(myHeroes[i])
}


// BREAK AND CONTINUE

for(let i = 1; i<=20; i++){
     if(i == 5){
        //console.log("5 detected");
        break;
     }
       //console.log(`value of i is: ${i}`);
}


for(let i = 1; i<=20; i++){
     if(i == 5){
        console.log("5 detected");
        continue;
     }
       console.log(`value of i is: ${i}`);
}