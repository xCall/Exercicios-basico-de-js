let isActive = false

console.log(isActive)

isActive = true

console.log(isActive)

isActive = 1

console.log(!!isActive)
console.log(!!true)
console.log(!!false)
//Situacoes que resolvem os verdadeiros
console.log("os verdadeiros...")
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isActive = true))
//Situacoes que resolvem os falsas
console.log('Os falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isActive = false))
console.log(!(''|| null || 0 || `ola`))

let nome = ""

console.log(nome || 'Desconhecido')

