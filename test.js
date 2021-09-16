function greet (name) {
  let result = 'Hello, '
  if (Array.isArray(name)) {
    result += name[0] + ' and ' + name[1]
  } else if (name) {
    result += name
  } else {
    result += 'my friend'
  }
  return result + '.'
}

const result = greet('Bob')
console.log(result)

const result2 = greet()
console.log(result2)

const result3 = greet(['Jill', 'Jane'])
console.log(result3)

// Comment here
// Another comment here












// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// const s = fruits.toString();
// console.log(s)
// // Output: Banana,Orange,Apple,Mango

// const j = fruits.join(" * ");
// console.log(j)
// // Output: Banana * Orange * Apple * Mango

// const pop = fruits.pop();
// console.log(fruits)
// // Output: [ 'Banana', 'Orange', 'Apple' ]

// const push = fruits.push('Kiwi');
// console.log(fruits)
// // Output: [ 'Banana', 'Orange', 'Apple', 'Kiwi' ]
