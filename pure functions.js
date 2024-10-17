//Pure & Impure Functions in JavaScript

    // * It Returns the sme result if given the same arguments
    // * It dose not cause any observable side effects

function sqr(n){
    return n*n
}
console.log(2);
console.log(2);
console.log(3);
console.log(3);
console.log(3);

//Impure Functions in JavaScript

    // * It cause may be observable side effects

let n = 10
function change(){
    n = 100
}

change()
console.log(n);

let point = {
    x: 10,
    y: 20
}

console.log(point);

function printPoint(point){
    point.x = 100
    point.y = 200

    console.log(point);
}

printPoint(point)
console.log(point);
