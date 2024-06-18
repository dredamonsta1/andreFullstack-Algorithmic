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