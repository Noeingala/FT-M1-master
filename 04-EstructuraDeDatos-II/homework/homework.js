'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function Node(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}


LinkedList.prototype.add = function(value) {
  let node = new Node (value)               //creamos nueva instancia de nodo.
  let current = this.head;                  //creamos variable para poder recorrer sin perder la referencia
  if (!current){                            //pregunto si current es null
    this.head = node                        //si es null le asigno nodo
   return node;                             //retorno
  }                                         //WHILE BUSCA DONDE DEBE INGRESAR NUEVO DATO
  while(current.next){                      //mientras tenga current, osea que mi current.next sea didtinto a null
    current = current.next;                 //que current sea el current siguiente
  }                                         //si current es null no entra al while
  current.next = node;                      //como current es null se le asigna node 
  return node
}

LinkedList.prototype.remove = function() {
  let current = this.head
  if(this.head === null) return null            //compara el head con null para saber si esta vacia la lista
  else if(this.head && !this.head.next){        //si tengo un head pero no tengo un next, tengo un unico elemento
    let aux = this.head.value;                  //creo una variable aux para guardar el valor que me piden que devuelva
    this.head = null                            //le asigno null al head
    return aux;                                 //retorno value eliminado
  }
  while(current.next.next){                     //hago current.next.next para saber que el proximo del proximo es null
    current = current.next;                     //MIENTRAS LO TENGA, AVANZO 
  }                                             //cuando encuentra en current.next
  let aux = current.next.value;                 //lo guardo en una variable aux para no perderlo
  current.next = null;                          //le asigno null al head
  return aux;                                   //retorno el valor guardado en aux, que es el eliminado
}

//search: Busca un valor dentro de la lista. 
//Puede recibir un valor o una función. 
//Si no hubiera resultados, devuelve null.
LinkedList.prototype.search = function(value){
  if(this.head === null) return null;                         //verifica si la lista esta vacia
  let current = this.head;                                    //creo variable current para poderrecorrer la lista
  while(current){                                             //mientras current sea algo avanzo
    if(current.value === value) return current.value;         //si current.value es igual al value que me pasan por parametro lo retorno
    else if(typeof value == "function"){                      //sino compara si el valor que me pasan por parametro es una funcion
      if(value(current.value)){                               //aplica la funcion a current.value ---- LA INVOCA ---- devuelve true o false
      return current.value;
      }
    }
    current = current.next;                                   //redefine el current para seguir buscando                      
  }
  return null;
}




// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
  this.numBuckets = 35;
  this.contenedores = []; 
}


// esta funcion hasheadora deberia sumar los key code de las letras de la palabra,
// y hacer el mod de ese numero por el numero de buckets.
HashTable.prototype.hash = function(key){              //ESTA FUNCION INDICA A DONE LO GUARDAMOS
  let sum = 0;                                         //creo variable para hacer la suma.
  for(let i=0; i<key.length; i++){                         //hago un for para iterar el key
    sum += key.charCodeAt(i);                          //implementa metodo charCodeAt que busca el valos de cada letra en ACCI y va sumando esos valores agregados a sum
  }
  return sum % this.numBuckets;                        //hace el modulo de ese numero por el numero de buckets
};


HashTable.prototype.set = function(key, value){
  if(typeof key !== "string") throw TypeError ("Keys must be strings")        //compara el key con un string, y tira error si no lo es
  let posicion = this.hash(key)                                               //me indica donde guardarlo
  // PARA PREVENIR QUE HAYAN COLISIONES
  if( this.contenedores[posicion] === undefined){                             //pregunto si en la posicion de ese contenedor hay algo
    this.contenedores[posicion] = {}                                          //asigno un objeto en esaposicion, de ese contenedor
  }
  this.contenedores[posicion][key]=value;                                     //le asigo el value y el key a ese objeto
};


//PARA OBTENER EL VALOR, NECESITO EL KEY
HashTable.prototype.get = function(key){
  let posicion = this.hash(key);                      //invoco la funcion hash, para buscar
  return this.contenedores[posicion][key];            //retorna el valor
};


HashTable.prototype.hasKey = function(key){
  let posicion = this.hash(key);                            //invoca la funcion hash
  return this.contenedores[posicion].hasOwnProperty(key);   //true  false --- pregunta si existe  esa propiedad como el key que me pasan por parametro
};






// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
