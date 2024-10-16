function miniMaxSum(arr) {
    // use sprad operator ...arr and Math.min to get largest and smallest int
    let largeFound = Math.max(...arr)
    let smallFound = Math.min(...arr)
    // then .filtered alrgest int and smallest int out of the array 
    let findLarge = arr.filter((array) => array !== largeFound)
    let findSmall = arr.filter((array) => array !== smallFound)
    // then used .reduce method to sum the new array
    let largeArr = findLarge.reduce(function (x, y){
        return x + y;
    })
    let smallArr = findSmall.reduce(function(x, y){
        return x + y;
    })
    console.log( largeArr, smallArr)
}