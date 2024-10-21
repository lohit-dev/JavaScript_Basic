function isValidAnagram(first_str, second_str) {
    if (first_str.length !== second_str.length) {
        return false;
    }
    var count = {};
    for (var i = 0; i < first_str.length; i++) {
        var char = first_str[i];
        // console.log('X: ', count[char]);
        if (count[char] == undefined) {
            //   count[char] = 1;
        }
        else {
            count[char]++;
        }
    }
    for (var i = 0; i < second_str.length; i++) {
        var char = second_str[i];
        console.log(count[char] + ':' + char);
        if (count[char] === undefined || count[char] === 0) {
            return false;
        }
        else {
            //   count[char]--;
        }
    }
    return true;
}
console.log(isValidAnagram('anagram', 'nagaram'));
console.log(isValidAnagram('listen', 'silent'));
