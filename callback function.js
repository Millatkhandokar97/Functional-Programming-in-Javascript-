//Callback Function in Javascript

function callBack(a, b){

        function add(a, b, c){
            c = a + b
            return c
        }
        return add(a, b)
}

console.log(callBack(10, 20));
console.log(callBack(100, 20));

