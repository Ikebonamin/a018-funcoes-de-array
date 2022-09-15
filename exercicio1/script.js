const objeto = {
  nome: 'astrodev',
  profissao: 'Dev das estrelas',
  username: 'astrodev_labenu',
  senha: 'melhorDeTodos',
};

// Exercício A //

let func1 = function (obj) {
  for (let objetosChange in obj) {
    console.log(`${objetosChange}: ${obj[objetosChange].toUpperCase()}`);
  }
};

func1(objeto);

/////// exercício 2 - a////

let { nome, profissao, username, senha } = objeto;
console.log(nome, profissao, username, senha);

/// exercicios 2 - b

function showValues(obj) {
  let text = '';
  for (let i in obj) {
    text += `${obj[i]}`;
  }
  return text;
}
console.log(showValues(objeto));

//// exercício 3 ///

function objectToCallBack(obj, func) {
  console.log(func(obj));
}
objectToCallBack(objeto, showValues);
objectToCallBack(objeto, func1);
