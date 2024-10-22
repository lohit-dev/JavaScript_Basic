function closure() {
    var count = 0;
    return function increment() {
        count++;
        return count;
    };
}
var outer = closure();
console.log(outer.call);
console.log(outer());
