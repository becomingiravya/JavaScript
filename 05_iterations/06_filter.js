const coding = ['js', 'ruby', 'python', 'c#', 'flutter' , 'java' , 'cpp']

const values = coding.forEach( (i) => {
    //console.log(i);
    return i;
})

//console.log(values);  // forEach won't return anything so storing it in a variable won't help 



const myNums = [1,2,3,4,5,6,7,8,9,10]


// ****************************************** WAYS TO PRINT WITH A SPECIFIC CONDITION *************************************************************



// *********** WAY 1 ************


// USE FILTER


//const newNums = myNums.filter( (num) => num > 4)
//const newNums = myNums.filter( (num) => {
    //num>4 // won't work cuz braces and no return keyword inside arrow function so outside scope
   // return num > 4
//})
//console.log(newNums);




// *********************** WAY 2 **********************

// USE FOREACH WITH IF CONDITIONAL


const newNums = []

myNums.forEach( (num) => {
    if(num>4){
        newNums.push(num)
    }
})

console.log(newNums)





const books = [
    {title: 'BOOK ONE', genre: 'Fiction', published: 1981, edition: 2004},
    {title: 'BOOK TWO', genre: 'Non-Fiction', published: 1992, edition: 2008},
    {title: 'BOOK THREE', genre: 'History', published: 1999, edition: 2007},
    {title: 'BOOK FOUR', genre: 'Non-Fiction', published: 1989, edition: 2010},  
    {title: 'BOOK FIVE', genre: 'Science', published: 2009, edition: 2014},  
    {title: 'BOOK SIX', genre: 'Fiction', published: 1987, edition: 2010},  
    {title: 'BOOK SEVEN', genre: 'History', published: 1986, edition: 1996},  
    {title: 'BOOK EIGHT', genre: 'Science', published: 2011, edition: 2016},  
    {title: 'BOOK NINE', genre: 'Non-Fiction', published: 1981, edition: 1989}
];

const userBooks = books.filter( (bk) => bk.genre === 'History')

const publish = books.filter( (pub) => pub.published >= 1995 && pub.genre === 'History')


//console.log(userBooks);
console.log(publish);
