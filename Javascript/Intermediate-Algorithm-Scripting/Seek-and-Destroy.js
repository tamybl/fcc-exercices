function destroyer(arr) {
    // Crear array con los parametros a buscar
    var [...arr1] = [...arguments].slice(1, [...arguments].length); 
    var result = arguments[0].filter(num => arr1.indexOf(num) == -1);
    return result;
  }
  
    //  Test
  destroyer([1, 2, 3, 1, 2, 3], 2, 3); // Debe retornar [1,1]