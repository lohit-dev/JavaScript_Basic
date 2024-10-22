function closure() {
  let count = 0;
  return function increment() {
    count++;
    return count;
  };
}

let outer = closure();
console.log(outer());
console.log(outer());
