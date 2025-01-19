/**
 * mediante el loop while agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */

let result = [];
let number= 7;

while(number > 0){
    result.push(number);
    number-=2;
}

//export result
module.exports = result;