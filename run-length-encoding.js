function runLengthEncoding(str) {
  let res = '';

  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      if (count === 9) {
        res += `9${str[i]}`;
        count = 1;
      } else {
        count++;
      }
    } else {
      res += `${count}${str[i]}`;
      count = 1;
    }
  }
  return res;
}

const str = '1122333'
console.log(runLengthEncoding(str))