//Return Function from Another Function in Javascript 

function base(base){
    return function(n){
        let result = 1
        for(let i = 0; i < base; i++){
            result *= n
        }
        return result
    }
}

let base10 = base(10)
console.log(base10(2));

let base5 = base(5)
console.log(base5(2));
console.log(base5(3));
console.log(base5(4));
console.log(base5(5));

let base15 = base(15)
console.log(base15(2));