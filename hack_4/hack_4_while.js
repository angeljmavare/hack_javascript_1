/**
 * mediante el while for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];
let number = 1;

while(number <= 7){ 
    result.push(number);
    number+=2;
}

//export result
module.exports = result;