const myNums  = [1,2,3]

// const myTotal = myNums.reduce(function (acc, currVal) {
//     console.log(`accumulator: ${acc} and current value: ${currVal}`);
    
//     return acc + currVal
// }, 0)



const myTotal = myNums.reduce( (acc, currVal) => {
    console.log(`accumulator: ${acc} and current value: ${currVal}`);
    return acc + currVal
}, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: 'js course',
        price: 999
    },
    {
        itemName: 'python course',
        price: 599
    },
    {
        itemName: 'java course',
        price: 1299
    },
    {
        itemName: 'ui ux course',
        price: 899
    },
]


const totalPrice = shoppingCart.reduce( (acc, i) => {
    console.log(`accumulator: ${acc} and item price: ${i.price}`);
    return acc + i.price
    
}, 0)
console.log(totalPrice);
