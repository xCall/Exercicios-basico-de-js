class celular {

  constructor() {

    this.cor = "vermelho";

  }

  ligar() {

    console.log("uma ligaçao");
    return "ligando";

  }

}

let objeto = new celular;

console.log(objeto);
console.log(objeto.ligar());