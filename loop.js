const cars = ['Tesla','Audi','BMW','Mercedes'];

// 1. For loop
console.log("-- For Loop --")
for(var i=0;i<cars.length;i++){
    console.log("Car"+(i+1)+": "+cars[i]);
    /*op: 
     Car 1: Tesla
     Car 2: Audi
     Car 3: BMW
     Car 4: Mercedes
    */
}

// 2. While loop
console.log("-- While Loop --")
var x = 0;
while(x<cars.length){
    console.log("Car "+(x+1)+": "+cars[x]);
    /* op: 
    Car 1: Tesla
     Car 2: Audi
     Car 3: BMW
     Car 4: Mercedes
    */
    x++;
}

// 3. Do  while
console.log("-- Do While Loop --");
var x =0;
do{
    console.log("Car"+(x+1)+": "+cars[x]);
    /* op: 
     Car 1: Tesla
     Car 2: Audi
     Car 3: BMW
     Car 4: Mercedes
    */
    x++;
} while(x<cars.length);

// For in (returns key of array or object)
var carList = "";
 for ( var i in cars){
     console.log("i is: "+i);
     /* op: 
     i is: 0
     i is: 1
     i is: 2
     i is: 3
     */
    carList += i+ ": "+ cars[i] + "\n";
 }
console.log(carList);
/* op:
 0: Tesla
 1: Audi
 2: BMW
 3: Mercedes
*/

