/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */

let number = [7,6,5,4,3,2,1];
let newArray = number.filter((value) => value % 2 ==! 0);

let result = [];
result = newArray.map((value) => value);

//export result
module.exports = result;