function generateDocument(characters, document) {
  const chars = {};
  for (let char of characters) {
    chars[char] ? chars[char]++ : chars[char] = 1
  }
  for (let letter of document) {
    if (!chars[letter]) return false;
    chars[letter] --;
  }
  return true;
}

const chars = 'abcabc'
const doc = 'aabbcc'
console.log(generateDocument(chars, doc)) // false