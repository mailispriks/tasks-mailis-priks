const products = require('./products.json')

// Ex 1

function getOneTypeProducts (type) {
  return products.filter((product) => {
    return product.type === type
  })
}

const tropical = getOneTypeProducts('TROPICAL')
const tropicalTotal = tropical.reduce((previousValue, currentValue) => {
  return previousValue + currentValue.price
}, 0)

// console.log('tropicalTotal', tropicalTotal)

const applesPears = getOneTypeProducts('APPLES_PEARS')
// console.log('applesPears', applesPears)

const apples = applesPears.filter((p) => {
  if (p.name.includes('Apple')) {
    return p
  }
})

// console.log('apples', apples)

// Ex 2

function getDiscountPrice (array) {
  return array.map((product) => {
    const result = product.price - (product.price * product.discount / 100)
    product.discountPrice = +result.toFixed(2)
    return product
  })
}

const discountProducts = products.filter((product) => {
  return product.discount > 0
})

// console.log('discountProducts', discountProducts)

// discountProducts.map((product) => {
//   const result = product.price - (product.price * product.discount / 100)
//   product.discountPrice = +result.toFixed(2)
// })

console.log('discountProducts', getDiscountPrice(discountProducts))

const lessThan = discountProducts.filter((product) => {
  return product.discountPrice <= 1
})

const moreThan = discountProducts.filter((product) => {
  return product.discountPrice >= 2
})

// console.log('lessThan', lessThan)
// console.log('moreThan', moreThan)

// Ex 3

function getCheapestProduct (array, type) {
  return array.reduce(function(prev, curr) {
    return prev[type] < curr.price ? prev : curr;
    // prev.price
    // prev.discountPrice
  });
}

function getMostExpenciveProduct (array, type) {
  return array.reduce(function(prev, curr) {
    return prev[type] > curr.price ? prev : curr;
    // prev.price
    // prev.discountPrice
  });
}

// const cheapestWithoutDiscount = products.reduce(function(prev, curr) {
//   return prev.price < curr.price ? prev : curr;
// });

const cheapestWithoutDiscount = getCheapestProduct(products, 'price')

console.log('cheapestWithoutDiscount', cheapestWithoutDiscount)

// With new prices
const allProducts = getDiscountPrice(products)
// console.log('allProducts', allProducts)

const cheapestWithDiscount = getCheapestProduct(allProducts, 'discountPrice')

console.log('cheapestWithDiscount', cheapestWithDiscount)

const sameType = cheapestWithoutDiscount.type === cheapestWithDiscount.type

// if (cheapestWithoutDiscount.name === cheapestWithDiscount.name) {
//   console.log('We have same product!', )
// } else {
//   console.log('We dont have same product', )
// }

const mostExpencive = getMostExpenciveProduct(allProducts, 'discountPrice')

let string = 'Cheapest product without discount is ' + cheapestWithoutDiscount.name + ' (costs ' + cheapestWithoutDiscount.price + '), '
string += 'considering discount is ' + cheapestWithDiscount.name + ' (costs ' + cheapestWithDiscount.discountPrice + ') and they '
if (sameType) {
  string += 'are '
} else {
  string += 'are not '
}
string += 'same type: ' + cheapestWithDiscount.type + '. '
string += 'Most expencive product is ' + mostExpencive.name + ' and it costs ' + mostExpencive.discountPrice + '.'

console.log(string)


// Ex 4 allProducts

function findProduct(name) {
  return allProducts.find((product) => {
    return product.name === name
  })
}

const cucumber = findProduct('Cucumber')
const tomato = findProduct('Tomato')
const appleKrista = findProduct('Apple Krista')

const cucumberPrice = +(cucumber.discountPrice * 0.2).toFixed(2)
const tomatoPrice = +(tomato.discountPrice * 0.8).toFixed(2)
const appleKristaPrice = +(appleKrista.discountPrice * 0.8).toFixed(2)

console.log('cucumberPrice', cucumberPrice)
console.log('tomatoPrice', tomatoPrice)
console.log('appleKristaPrice', appleKristaPrice)

const total = cucumberPrice + tomatoPrice + appleKristaPrice

console.log('total', total)
if (total <= 3) {
  console.log('I can afford')
} else {
  console.log('I cant afford')
}

const totalWithoutTomato = cucumberPrice + appleKristaPrice
const moneyLeft = 3 - totalWithoutTomato

console.log('moneyLeft', moneyLeft)

const tomatosICanHave = +(moneyLeft / tomato.discountPrice).toFixed(2)

console.log('tomatosICanHave', tomatosICanHave)

const newTomatoPrice = +(tomato.discountPrice * tomatosICanHave).toFixed(2)

const newTotal = cucumberPrice + appleKristaPrice + newTomatoPrice

console.log('newTotal', newTotal)

if (newTotal <= 3) {
  console.log('I can afford')
} else {
  console.log('I cant afford')
}
