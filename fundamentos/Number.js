const peso1 = 1.0
const peso2 = Number('2.0')//string to number conversion

console.log(peso1, peso2)
/*
 * method to validate
 * whether the value
 * is integer or not
*/
console.log(Number.isInteger(peso1), Number.isInteger(peso2))

const avaliacao1 = 9.71
const avaliacao2 = 6.87
const total = avaliacao1 * peso1 + avaliacao2 * 2
const media = total / (peso1 + peso2)

console.log(media)
/*
  * method for setting
  * the number of decimal
  * places to a float
*/
console.log(media.toFixed(2))
/*
  * method used to convert
  * numeral to string, if you
  * pass a parameter like
  * number 2, it converts to 
  * binary, if you pass 8 it 
  * converts to octal, if
  * you pass 16 hexadecimal
*/
console.log(media.toString(16))
/*
  * function used to display
  * data types
*/
console.log(typeof media)
