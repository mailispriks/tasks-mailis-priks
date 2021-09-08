const hobbies = ['skating', 'reading', 'computer games']

const myInfo = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 23,
  hobbies
}

// console.log('Hello ' + myInfo.firstName + ' ' + myInfo.lastName)
console.log('Your favourite hobby is: ' + hobbies[0])
// Logs Your favourite hobby is: skating
console.log('Your favourite hobbies are:')
for (let i = 0; i < hobbies.length; i++) {
  console.log(hobbies[i])
}
// Your favourite hobbies are:
// skating
// reading
// computer games
