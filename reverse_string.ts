function reverse_string(str: string) {
  let reversed: string = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return { str, reversed };
}

console.log(reverse_string('Hello'));
