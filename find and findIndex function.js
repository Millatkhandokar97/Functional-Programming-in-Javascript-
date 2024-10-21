//Find and FindIndex Function in Javascript

let ary = [9, 1, 12, 7, 81, 93, 2, 3, 4, 5, 6]


let result = ary.find(function(value){
    return value === 5
})

console.log(result);

let result1 = ary.findIndex(function(value){
    return value === 7
})

console.log(result1);


function myFind(ary, cb){
    for(let i = 0; i < ary.length; i++){
        if(cb(ary[i])){
            return ary[i]
        }
    }
}

let myResult = myFind(ary, function(value){
    return value === 7
})

console.log(myResult);


function myFindIndex(ary, cb){
    for(let i = 0; i < ary.length; i++){
        if(cb(ary[i])){
            return i
        }
    }
}

let myResult1 = myFindIndex(ary, function(value){
    return value === 81
})

console.log(myResult1);