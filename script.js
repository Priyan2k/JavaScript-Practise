/**
 * Immutable Objects
 * Create a object with key and values
 * case 1: Not allowing to modify
 *       Using Object.freeze to not allow modification
 * 
 * Case 2: Not allowing someone to add new details but modify
 *       Two methods:
 *       1. Object.seal
 *       2. Object.prevent.Extension
 * 
 * Case 3: Not allowing someone to delete
 *       Two methods:
 *       1. Object.seal
 *       2. Object.freeze
 *        
 *         
 */

var car = {
    brand : "Tesla",
    model : "Model X",
    color : "Black",
}

Object.freeze(car)
car.color = "blue";

console.log( "Case 1 :",car);

var car2 = {
    brand : "Tesla",
    model : "Model X",
    color : "Black",
}

Object.preventExtensions(car2)
car2.weight = 1300;
car2.color = "red";

console.log( "Case 2 :",car2);

var car3 = {
    brand : "Tesla",
    model : "Model X",
    color : "Black",
}
Object.seal(car3)
delete car3.model;

console.log( "Case 3 :",car3);

// to check wheather the key is present in the object.

console.log(car3.hasOwnProperty('brand'));
console.log(car.hasOwnProperty('name'));