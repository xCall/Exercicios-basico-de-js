const values = [7.7, 8.9, 6.3, 9.2]

console.log(values[0], values[1], values[2], values[3])

values.push({id: 3}, false, null, NaN)

console.log(values)
console.log(values.pop())

delete values[5]

console.log(values)

console.log(typeof values)