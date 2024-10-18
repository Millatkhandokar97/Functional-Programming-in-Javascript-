//First Class Function in Javascript 

// 1. A Function can be Stored in a Variable
// 2. A Function can be Stored in an Array
// 3. A Function can be Stored in an Object
// 4. We can create Function as Need
// 5. We can Pass Function as an Argument
// 6. We can return Function from Another Function

    // 1. A Function can be Stored in a Variable

function add(a, b){
    return a+b
}
let sum = add
console.log(sum(5, 10));
console.log(typeof sum);

    // 2. A Function can be Stored in an Array
let ary = []
ary.push(add)
console.log(ary);
console.log(ary[0](10, 25));

    // 3. A Function can be Stored in an Object
let obj = {
    sum: add
}

console.log(obj);
console.log(obj.sum(12, 15));

    // 4. We can create Function as Need
setTimeout(function(){
    console.log('I have Running...');
}, 3000)


    // 5. We can Pass Function as an Argument

function add(a, b){
    return a+b
}

function manipulate(a, b, fun){
    let c = a + b
    let d = a - b
    // function divition(){
    //     let m = fun(a, b)
    //         return c / d /m
        
    // }

    
    // 6. We can return Function from Another Function

    return function(){
        let m = fun(a, b)
            return c / d / m
        
    }
}

let divition = manipulate(8, 4, add)
console.log(divition()); 