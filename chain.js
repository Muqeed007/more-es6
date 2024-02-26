const products = {
    count : 5000,
    data : [
        {id:1, name: 'lenove',price: 50000},
        {id:2, name: 'macbook',price: 150000},
    ]   
}
// access the price of macbook
console.log(products.data[1].price);

const user1 = {
    id:5001,
    name: 'muqeed',
    address: {
        street:{
            first:'64/1',
            second:'Shah Ali Bag',
            third:'Mirpur-1',
        },
        city: 'Dhaka'
    }   
}
const user2 = {
    id:5001,
    name: 'muqeed',
    address: {
        street:{
            first:'64/1',
            // second:'Shah Ali Bag',
            third:'Mirpur-1',
        },
        city: 'Dhaka'
    }   
}
console.log(user1.address.street?.second);
console.log(user2.address.street?.second);