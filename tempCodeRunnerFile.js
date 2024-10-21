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