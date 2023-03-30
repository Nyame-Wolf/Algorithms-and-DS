function reverseWords(str) {
  return str
    .split(' ')
    .map((str) => str.split('').reverse().join(''))
    .join(' ');
}

//js good soln:
const reversedWords = (str) =>
  str.split('').reverse().join('').split(' ').reverse().join(' ');
// or

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
