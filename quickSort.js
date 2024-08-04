function pivot(arr, start = 0, end = arr.length - 1) {
    swap = (array, i, j) => {
        [array[i], array[j]] = [array[j], array[i]]
        
    }
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++){
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i)
            console.log(arr)
        }
    }
    swap(arr, start, swapIdx)
    return swapIdx

}

pivot([4, 8, 2, 1, 5, 7, 6, 3])