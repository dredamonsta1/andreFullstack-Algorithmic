function miniMaxSum(arr) {
    // use sprad operator ...arr and Math.min to get largest and smallest int
    let largeFound = Math.max(...arr)
    let smallFound = Math.min(...arr)
    // then .filtered alrgest int and smallest int out of the array 
    let findLarge = arr.filter((array) => array !== largeFound)
    let findSmall = arr.filter((array) => array !== smallFound)
    // then used .reduce method to sum the new array
    // let largeArr = findLarge.reduce(function (x, y){
    //     return x + y;
    // })
    // let smallArr = findSmall.reduce(function(x, y){
    //     return x + y;
    // })
    let largeArr = findLarge.reduce((x, y) =>  x += y, 0);
    let smallArr = findSmall.reduce((x, y) => x += y, 0)
    console.log( largeArr, smallArr)
}
// runtime error on 55555 test case due to getting the same number for both
// this code gets rid of the error case
let min = Math.min.apply(null, arr), 
    max = Math.max.apply(null, arr);
let sum = arr.reduce((prev, curr) => prev + curr);
console.log(sum - max, sum - min);