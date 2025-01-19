/**
 * mediante el loop while agregar los números 5,4,3,2,1
 * dentro del array result 
 * 
 * 
 *  output => [5,4,3,2,1]
 */
let result = [];
let number = 5;

while(number >= 1){
    result.push(number);
    number--;
}
//export result
module.exports = result;