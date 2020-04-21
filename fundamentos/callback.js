function writeHello(callback) {

  console.log('Helo Word')

  if (typeof callback == 'function') callback()

}

writeHello(() => console.log('Callback Function'))