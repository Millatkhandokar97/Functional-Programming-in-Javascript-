//Reduce Function in Javascript

let ary = [9, 1, 2, 3, 4, 5, 6]
let sum = ary.reduce(function(previous, current){
    return previous + current
},100)
console.log(sum);

let max = ary.reduce(function(previous, current){
    return Math.max(previous, current)
}, 0)

console.log(max);


function myReduce(arr, cb, acc){
    for(let i = 0; i < ary.length; i++){
        acc = cb(acc, ary[i])
    }
    return acc
}

let result = myReduce(ary, function(previous, current){
    return previous + current
}, 0)

let result1 = myReduce(ary, function(previous, current){
    return Math.max(previous, current)
}, 0)
let result2 = myReduce(ary, function(previous, current){
    return Math.min(previous, current)
}, ary[0])


console.log(result);
console.log(result1);
console.log(result2);