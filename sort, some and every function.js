//Sort, Some and Every Function in Javascript

let ary = [9, 1, 12, 7, 81, 93, 2, 3, 4, 5, 6]

ary.sort(function(a, b){
    if(a > b){
        return 1
    } else if(a < b){
        return -1
    }else{
        return 0
    }
})
console.log(ary);

let person = [
    {
        name: 'A',
        age: 27
    },
    {
        name: 'B',
        age: 32
    },
    {
        name: 'C',
        age: 23
    },
    {
        name: 'D',
        age: 25
    },
    {
        name: 'E',
        age: 22
    }

]

person.sort(function(a, b){
    if(a.age > b.age){
        return 1
    } else if(a.age < b.age){
        return -1
    }else{
        return 0
    }
})


console.log(person);

let res1 = ary.every(function(value){
    return value % 2 === 0
})
console.log(res1); 

let res2 = ary.every(function(value){
    return value >= 0
})
console.log(res2);


let res3 = ary.some(function(value){
    return value % 2 === 0
})
console.log(res3); 

let res4 = ary.some(function(value){
    return value < 0
})
console.log(res4);