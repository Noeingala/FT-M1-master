'use strict'
// No cambies los nombres de las funciones.

//1. Factoreando Números:
//Se acuerdan como factoreaban números en la escuela? Hagamos un algoritmo para eso! 
//Hay que seguir estos pasos:
//1. Empezamos intentando dividir el número en dos, si el resto es cero, lo seguimos haciendo hasta 
//que no sea cero. En cada pasada agregamos el número como factor.
//2. Pasamos a el siguiente factor que no sea divisible con ningún anterior 
//(en la segunda pasada seria el tres) y dividimos, si el resto es cero, lo agregamos como factor, 
//si no, pasamos al siguiente factor.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var factores = [1];                         //variable para guardar los factores de num
  var divisor = 2;                            //variable con divisor que inicia en 2

  while(num > 1){                             //creamos loop, mientras que numero sea mas grande que 1
    if(num % divisor === 0){                  //si el resto de num x el divisor es 0   
      factores.push(divisor)                  //lo agregamos al array
      num = num/divisor                       //a ese resultado lo dividimos por el divisor
    } else {                                  //si mi num no es divisible por el divisor
      if(divisor % 2 === 0) divisor++;        //si mi diviror es par lo incremento en 1, vuelve al while, 
      else divisor += 2;                      //sino increneto 2  
    } 
    }
    return factores;
  }

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //[3, 9, 21, 4, 1, 2]---> boobleSort compara pares de valores, 1 y 2 y los compara.  busca llevar el mas grande al final.
  // i                     

  let swap = true          

  while(swap){                                              //mientras swap sea tru, voy recorriendo el arreglo
    swap = false
    for(let i = 0; i < array.length -1; i++) {              //array.length -1, para que compare la posicion i con la i+1
      if(array[i] > array[i + 1]){                          //si i es mayor a lo que esta en i+1, lo swapeo
        var aux = array[i]                                  //guarda lo que hay en la posicion i del arreglo
        array[i] = array[i + 1]                             //lo que estaba en la posicion i del arreglo, lo guardo en la posicion siguiente
        array[i + 1] = aux                                  //y guardo en aux lo que tenia en i+1. AQUI INTERCAMBIAN LA POSICION
        swap = true                                         //aqui se setea el swap en true, para que vuelva a iterar
      }                                                     //solo llega a ser true cuando hizo algun swapeo (cambio)
    }                                                       //cuando no se cumple la condicion del if, se corta el loop. retorna el array.
  }                                                         //hasta que no terminan todas las iteraciones del for, no vuelve al while
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

//    [3, 9, 21, 4, 1, 2]---> insertionSort toma el segundo elemento y compara con el/los de la izquierda
//        i
//     j

  for( let i = 1; i< array.length; i++){
    var currentValue = array[i]                     //voy guardando el valor que quiero insertar en la parte ordenada (que seria del  elemento a laizq)
    var j = i-1                                     //pongo a j antes que i para comparar
      while(j >= 0 && currentValue <= array[j]){    //compara si j es mayor a 0 y si current es menor que j, si se cumplen ambas entra al loop
        array[j + 1] = array[j]                     //en la posicion j pongo el valor de j+1
        j--                                         //decrementa j, va hacia la izquierda, y vuelve a entrar  en el  loop del while
      }                                             //en caso de que los comparados esten ordenados,si i no es menos a j
    array[j + 1] = currentValue                     //guardo el valor que le asigne a mi variable  auxiliar, es decir el que tengo que cambiar
  }
  return array
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  //    [3, 9, 21, 4, 1, 2]---> selectionSort toma como minimo al primer elemento y lo compara con el resto.
  //     i
  //        j

    for( let i = 0; i < array.length-1; i++){
      var min = i;                                         //me guardo aqui el indice o posicion donde esta el valor minimo.

      for(let j = i + 1; j < array.length; j++){
        if(array[j] < array[min]) min = j
      }
      if(i !== min){
        let aux = array[i];
        array[i] = array[min]
        array[min] = aux
      }
    }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
