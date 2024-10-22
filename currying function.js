//Currying in Javascript

function add(a, b, c){
    return a + b + c
}
console.log(add(10, 20, 30));

function currying(a){
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}

let result = currying(10)(20)(30)
console.log(result);