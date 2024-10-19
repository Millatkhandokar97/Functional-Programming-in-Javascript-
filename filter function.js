//Filter Function Implementation in Javascript

let ary = [1, 2, 3, 4, 5, 6]

let filterAry = ary.filter(function(value){
    return value % 2 === 0
})

console.log(filterAry);

function filterFun(ary, cb){
    let filterary = []
    for(let i = 0; i < ary.length; i++){
        if(cb(ary[i])){
        filterary.push(ary[i])
        }      
    }
    return filterary
}

// console.log(filterFun(ary));

let fun = filterFun(ary, function(value){
     return value % 2 === 0
})
let fun1 = filterFun(ary, function(value){
     return value % 2 === 1
})

console.log(fun);
console.log(fun1);