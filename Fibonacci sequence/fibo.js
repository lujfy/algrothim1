

function fib(n){
    const array = [ 0 , 1]
    for(let i = 2 ; i < n ; i++) {
        array[i] = array[i-1] + array[i-2]
    }

    console.log(array)

}

fib(8) ;

function fibonacy(n) {
    // if n finally smaller than 2 we return n
    if (n < 2) {
        return n
    }
    else {
        fibonacy(n-1) + fibonacy(n-2)
    }
    // let say fibonacy(5) after - 1 will not be add because it not return n because 5 - 1 = 4
    
}