/* Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
*  In other words, return the symmetric difference of the two arrays. 
*/

/* Diferencia simetrica
* En Teoría de conjuntos la diferencia simetrica corresponde a los elementos que pertenecen a alguno
* de los conjuntos sin pertencer a los 2.
* El conjunto es el resultado de la unión de los arrays menos la intersección de los mismos
*/

function diffArray(arr1, arr2) {
  var newArr = [];
    // Se filtra y se obtienen los numeros que poseen en comun.
  let intersection = arr1.filter(item => arr2.indexOf(item) != -1);
    // Se concatenan los array
  let union = arr1.concat(arr2);

  newArr = union.filter(num => intersection.indexOf(num) == -1)
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);