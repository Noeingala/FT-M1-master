'use strict'

function BinarioADecimal(num) {
  // tu codigo aca

  let resultado = 0;
  for (let i = 0; i < num.length; i++) {
     resultado += num[i] * 2 ** (num.length - 1 - i);//(es uno menos que el tamaño del string)
  }
  return resultado;
}


function DecimalABinario(num) {
  // tu codigo aca
  let binario = [];
  while (num > 0){
    binario.unshift(num%2);
    num = Math.floor(num/2);
  }
  return binario.join("")
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}