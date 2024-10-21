function missing_number(arr, n) {
    var actual_sum = (n * (n + 1)) / 2;
    var arr_sum = 0;
    arr_sum = arr.reduce(function (a, b) { return a + b; }, 0);
    console.log(arr_sum);
    return actual_sum - arr_sum;
}
console.log(missing_number([1, 2, 4, 5, 6], 6));
