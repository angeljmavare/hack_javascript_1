/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */

let number = [1,2,3,4,5,6,7];
let newArray = number.filter((value) => value % 2 ==! 0);

let result = [];
result = newArray.map((value) => value);

//export result
module.exports = result;