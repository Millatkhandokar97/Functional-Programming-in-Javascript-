//Implementation Map Function in Javascript

let ary = [1, 2, 3, 4, 5]
let sqrAry = ary.map(function(v, i, ary){
    return ary[i] * ary[i]
})

console.log(sqrAry);


function map(ary, cb){
    let result = []
    for(let i = 0; i < ary.length; i++){
        let tem = cb(ary[i])
        result.push(tem)
        
    }
    return result
}

// console.log(map(ary));

let milti = map(ary, function(value){
    return value * value
})
let divition = map(ary, function(value){
    return value / value
})
let mten = map(ary, function(value){
    return value * 10
})

console.log(milti);
console.log(divition);
console.log(mten);