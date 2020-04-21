/*
function somar(x1, x2) {

  return `${x1} X ${x2} = ${x1 + x2}`;

}

console.log(somar(1,2));

function calc(x1, x2, operador) {

  return eval(`${x1} ${operador} ${x2}`);

}

let res = calc(10, 10, "*");

console.log(res);

let seuNome = (nome, sobrenome) => {

  return `${nome} ${sobrenome}`;

}

console.log(seuNome("carlos", "daniel"));



window.addEventListener('focus', event => {

  console.log('focus');

});

document.addEventListener('click', event => {

  console.log('click');

});




let agora = Date.now();

console.log(agora);

let agora = new Date();

console.log(agora.getDate());
console.log(agora.toLocaleDateString("pt-br"));
console.log(agora.getFullYear());



let motos = ["hornet", "xj6", "meiota", "fuguetao"];

motos.forEach(function(value, indice) {

  console.log(indice, value);

});
*/

let celular = function() {

  this.cor = "prata";

  this.ligar = function() {

    console.log("ligando o telefone");
    return "ligando";
  }


}

let objeto = new celular();

console.log(objeto.ligar());