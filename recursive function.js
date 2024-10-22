//Recursive Function in Javascript

function recursive(n){
    if(n === 0){
        return
    }
    console.log('recursive call with itself');
    recursive(n -1)
}
recursive(10)


function sum(n){
    if(n === 1){
        return 1
    }
    return n + sum(n -1)
}

console.log(sum(10));


function factorial(n){
    if(n === 1){
        return 1
    }
    return n * factorial(n -1)
}
console.log(factorial(5));
console.log(factorial(10));
