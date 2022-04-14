// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){

  let objetoMatriz=objeto;

  return Object.entries(objetoMatriz)
  
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

}


function numberOfCharacters(string) {

  let characters={};
  for(let i=0; i<string.length; i++){
    if(characters.hasOwnProperty(string[i])){
      characters[string[i]] = characters[string[i]] + 1;

    } else{
      characters[string[i]] = 1
    }
    
  }
  return characters
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
}


function capToFront(s) {
  let MAYUS = "";
  let minus = "";

  for(let i=0; i<s.length; i++){

    if(s[i] === s[i].toLowerCase()){
      minus = minus + s[i];

  }else{
    MAYUS = MAYUS + s[i]; 
  } 

  }
  return MAYUS + minus  
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
}


function asAmirror(str) {

  stringToArray = str.split(' ');

  arrayFinal = stringToArray.map(function(element){

   return element.split('').reverse().join('');

  })

  return arrayFinal.join('');

  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
} 


function capicua(numero){

  let numString = numero.toString();

  numString.split(' ').reverse().join('');

  if(numString === numero){
    return "Es capicua";

  }else{
    return "No es capicua"
  }
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
}


function deleteAbc(cadena){

  let eliminarCadena=[];

  for(let i=0; i<cadena.length; i++){

    if(cadena[i]==="a" || cadena[i]==="b" || cadena[i]==="c"){
      continue;
    }else{
      eliminarCadena = eliminarCadena + cadena[i];
    }
  }
  return eliminarCadena;

  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
}


function sortArray(arr) {

  let changeCadena=true;

  while(changeCadena){
    changeCadena=false;
    for(let i=0; i<arr.length -1; i++){
      if(arr[i].length > arr[i+1].length){

      let sustituto= arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = sustituto;
      changeCadena=true;
      }

    }
  }
  return arr;
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
}


function buscoInterseccion(arreglo1, arreglo2){
  
  let interseccion=[];

  /*for(let i = 0; i < arreglo1.length; i++){
    for(let z = 0; z < arreglo2.length; z++){

      if(arreglo1[i]===arreglo2[i]){
        interseccion.push(arreglo1[i]);
      }
    }
  }
  return interseccion*/


arreglo1.forEach(function (item) {
  arreglo2.forEach(function(comparar) {
    if (item === comparar) {
      interseccion.push(comparar)
    }
  })
})
return interseccion
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

