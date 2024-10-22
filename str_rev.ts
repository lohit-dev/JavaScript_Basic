function rev_str(str: string) {
  let reverse = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}

console.log(rev_str('hello'));

function return_max(a: number[]) {
  let max = a[0];

  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[j] > a[i]) {
        max = a[j];
      }
    }
  }

  return max;
}

console.log(return_max([1, 8, 3, 5, 21]));

function count_vowels(b: string) {
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < b.length; i++) {
    if (vowels.includes(b[i])) {
      count++;
    }
  }

  return count;
}

console.log(count_vowels('hello'));

function fizzBuzz(i: number) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

fizzBuzz(234);

function anagram(str: string, str1: string) {
  if (str.length !== str1.length) {
    return false;
  }

  let count: { [key: string]: number } = {};
  // let count = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (count[char] == undefined) {
      count[char] = 1;
    } else {
      count[char]++;
    }
  }

  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    if (count[char] === undefined || count[char] === 0) {
      return false;
    } else {
      count[char]--;
    }
  }

  return true;
}

console.log(anagram('anagram', 'nagaram'));

function count_characters(str: string, given_char: string) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char === given_char) {
      count++;
    }
  }
  return count;
}

console.log(count_characters('hello world', 'o'));

function two_sum(a: number[], target: number) {
  for (let i = 0; i < a.length; i++) {
    let compliment = target - a[i];
    if (a.includes(compliment)) {
      return [i, a.indexOf(compliment)];
    }
  }
}

console.log(two_sum([1, 2, 7, 15], 9));

class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

function reverseLinkedList(head: LinkedList | null): LinkedList | null {
  let prev: LinkedList | null = null;
  let current: LinkedList | null = head;

  while (current) {
    let next: LinkedList | null = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

const x = new LinkedList(1);
x.next = new LinkedList(2);
x.next.next = new LinkedList(3);
const y = reverseLinkedList(x);
console.log(y);
