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

function bubbleSort(arr) {
    let noSwaps;
    for (let i = 0; i < arr.length; i++){
        noSwaps = true;
        for (let j = 0; j < arr.length-1; j++){
            console.log(arr, arr[j], arr[j+1])
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

bubbleSort([37, 45, 29, 1, 12, 8])

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++){
        let smallest = i;
        for (let j = i+1; j < arr.length; j++){
            if (arr[j] < arr[smallest]) {
                smallest = j;
            }
        }
        if (i !== smallest) {
            
            console.log(i, smallest)
            let temp = arr[i];
            arr[i] = arr[smallest];
            arr[smallest] = temp;
        }
    }
    return arr;
}

selectionSort([34, 22, 10, 19, 17])

