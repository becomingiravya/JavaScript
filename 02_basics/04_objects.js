// WAYS TO DECLARE OBJECTS 

// ONE
const tinderUser = new Object(); // without the below info this would just print empty braces


// TWO
const tinderUser2 = {} // this would also print just empty braces

tinderUser.name = "raghvendra"
tinderUser.id = "123@34"

//console.log(tinderUser)


const regularUser = {
    email : "someone@gmail.com",
    fullname : {
        userFullName : {
        firstName : "Lumishka",
        lastName : "Verma"
    }
}
}

//console.log(regularUser.fullname.userFullName.firstName);


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};

const obj3 = Object.assign({}, obj1,obj2,obj4); // what happens if you don't give the empty braces?? technically the output will be the same but
// all the obj1, obj2, obj3 will go in obj1 but if given the braces then all those will go in those braces only. So its syntactically good to give
// braces.

// console.log(obj3)

const obj5 = {...obj1, ...obj2, ...obj4};
console.log(obj5);


const users = [  // objects inside array
    {
        id: 1, 
        email: "someone@gm.com"
    },
    {
        id: 2, 
        email: "some@gm.com"
    },
    {
        id: 3, 
        email: "so@gm.com"
    },
    {
        id: 4, 
        email: "s@gm.com"
    },
    {
        id: 5, 
        email: "one@gm.com"
    },
    {
        id: 6, 
        email: "ne@gm.com"
    }
]

// to access it 

console.log(users[1].email)   // name then index value then dot operator

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // array of key and value inside an array


console.log(tinderUser.hasOwnProperty('islogged'))