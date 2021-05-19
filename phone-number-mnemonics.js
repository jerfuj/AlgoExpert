// Input: String of nums
// Output: Array of Strings - combinations that can be made with the nums

/*
  0 & 1 have no letter associated with it
*/

function phoneNumberMnemonics(phoneNumber) {
  const length = phoneNumber.length;
  const keypad = {
    '1': '1',
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
    '0': '0',
  };
  const res = [];

  const comboMaker = (currIdx, currStr) => {
    if (currIdx === length) {
      return res.push(currStr)
    }

    const currentNum = phoneNumber[currIdx];

    for (let i = 0; i < keypad[currentNum].length; i++) {
      comboMaker(currIdx + 1, currStr + keypad[currentNum][i]);
    }
  };

  comboMaker(0, '');

  return res;
}

const phoneNumber = '123';
console.log(phoneNumberMnemonics(phoneNumber));
