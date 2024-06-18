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