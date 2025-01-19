/**
 * mediante el while for iterar cada una de las letras del string "fooziman"
 * debes anexar los caracteres de string al array result
 * ["f","o","o","z","i","m","a","n"] 
 *
 *
 * output => ["f","o","o","z","i","m","a","n"]
 */
let str = "fooziman";
let newArray = [];
newArray = str.split("");

let result = [];
let number = 0;

while(number < str.length){
    result= newArray.map((value) => value);
    number++;
}

//export result
module.exports = result;