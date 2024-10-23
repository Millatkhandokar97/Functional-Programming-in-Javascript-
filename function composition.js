//Function Composition in Javascript 

function print(input){
    console.log(input);
}

function sqr(n){
    return n * n
}

function multiply(x){
    return x * 2
}
function add(a, b){
    return a + b
}

print(sqr(multiply(add(2, 3))))