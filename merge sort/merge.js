function mergesort(arr) {
    if (arr.length < 2) {
        return arr
    }
    const mid = arr.length / 2 

    const leftarr = arr.slice(0 , mid)
    const rightarr = arr.slice(mid)

    return merge(mergesort(leftarr) , mergesort(rightarr))


}

function merge(leftarr , rightarr) {
    const sortedArr = []
    while(leftarr.length && rightarr.length) {
        if(leftarr[0] <= rightarr[0]){
            sortedArr.push(leftarr.shift())
        }
        else{
            sortedArr.push(rightarr.shift())
        }
    }
    return [...sortedArr , ...leftarr , ...rightarr]
}

const arr = [3 ,2 , 4 ,-1 , 0 , 10]
console.log(mergesort(arr))