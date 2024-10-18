//Foreach Implementation in Javascript

let ary = [1, 2, 3, 4, 5, 6]

let sum = 0
ary.forEach(function(v, i, a){
    // console.log(v, i, a);
    sum += v
})
console.log(sum);




// Foreach Implementation

function foreach(ary, cb){
    for(let i = 0; i < ary.length; i++){
        // console.log(ary[i]);
        cb(ary[i], i, ary)
    }
}

let summ = 0
foreach(ary, function(value, i, ary){
    console.log(value, i, ary);
    summ += value
})

console.log(summ);
