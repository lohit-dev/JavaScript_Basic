function remove_duplicate(arr: number[]) {
  return [...new Set(arr)];
}

console.log(remove_duplicate([1, 2, 3, 2, 1, 3]));
