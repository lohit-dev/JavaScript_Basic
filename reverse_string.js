function reverse_string(str) {
    var reversed = '';
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return { str: str, reversed: reversed };
}
console.log(reverse_string('Hello'));
