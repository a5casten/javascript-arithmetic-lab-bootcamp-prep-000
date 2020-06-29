/* Basic Math Functions */

function add(a, b){
  var sum = a+b
  console.log(sum)
  return sum
}

function subtract(a, b){
  var difference = b-a
  console.log(difference)
  return difference
}

function multiply(a, b) {
  var product = a*b
  console.log(product)
  return product
}

function divide(a, b){
  var quotient = a/b
  console.log(quotient)
  return quotient
}

function increment(n) {
  console.log(n++)
  return n++
}

function decrement(n) {
  console.log(n--)
  return n--
}

function makeInt(n) {
  var integer = parseInt(n)
  console.log(integer)
  return (integer)
}

function preserveDecimal(n) {
  var num = parseFloat(n)
  console.log(num)
  return num
}