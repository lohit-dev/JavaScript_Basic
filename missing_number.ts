function missing_number(arr: number[], n: number) {
  let arr_sum = 0;

  const actual_sum = (n * (n + 1)) / 2;
  arr_sum = arr.reduce((a, b) => a + b, 0);
  return actual_sum - arr_sum;
}

console.log(missing_number([1, 2, 4, 5, 6], 6));
