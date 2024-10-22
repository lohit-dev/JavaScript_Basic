function mergeSortedArrays(arr1, arr2) {
    var i = 0;
    var j = 0;
    var mergedArray = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        }
        else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    console.log('m: ', mergedArray);
    // Add remaining elements from arr1
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }
    // Add remaining elements from arr2
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }
    return mergedArray;
}
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));
