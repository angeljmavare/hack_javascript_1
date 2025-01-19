/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let newArray = [];
let result = [];

function mayusPrimeraLetra(palabra) {
    return palabra.charAt(0).toUpperCase()+palabra.slice(1); 
}

result = arr.map((value) => mayusPrimeraLetra(value));

//export result
module.exports = result;