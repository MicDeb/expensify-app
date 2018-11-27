// Object destructuring


// const person = {
//   name: 'Andrew',
//   age: 25,
//   location: {
//     city: 'Warsaw',
//     temp: 92
//   }
// }
//
// const {name, age} = person;
//
// console.log(`${name} is ${age}.`);
//
// const { city, temp } = person.location;
// if(temp && city){
//   console.log(`It's ${temp} in ${city}`);
// }


// const book = {
//   title: '101 dalmatyncow',
//   author: 'Jan Kowalski',
//   publisher: {
//     // name: 'GWO'
//   }
// }
//
//
// const { name: publisherName = "Self-Published" } = book.publisher;
//
// console.log(publisherName)



// Array destructuring


const address = ['123 Jana Hewelisza', 'Philadelphia', 'Pennsylvania', '1234566'];

const [street, city, state, zip] = address;

console.log(`You are in ${city} ${state}.`)
