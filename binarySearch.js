function binarySearch(arr, elem) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    console.log(start, middle, end);
    if (arr[middle] === elem) {
        return middle;
    }
    else return -1;
}


binarySearch([2, 5, 6, 9, 13, 15, 28], 30)


function naiveSearch(long, short) {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if (short[j] !== long[i + j]) {
                break;
            }
            if (j === short.length - 1) {
                console.log(long[i], short[j])
                count++
            }
        }
    }

}

naiveSearch("lorie loled", "lol")





