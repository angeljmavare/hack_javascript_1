/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
arr.shift();
arr.pop();
arr= arr.map((value) => value.replace("a","@"));
let tam = arr.length;
arr[tam-1] = arr[tam-1].toUpperCase();

let result = [];

result = arr.map((value) => value);

//export result
module.exports = result;