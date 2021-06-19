// input: String of brackets
// output: Boolean if brackets are balanced/valid

// iterate over the string
// keep a stack of the opening brackets
// when a closing bracket is found, if it matches the opening one, pop from the stack
// otherwise return false

function balancedBrackets(string) {
  const stack = [];
  const openingBrackets = ['{', '[', '('];
  const matches = {
    '}': '{',
    ']': '[',
    ')': '(',
  };

  for (let bracket of string) {
    if (openingBrackets.includes(bracket)) {
      stack.push(bracket);
    } else if (Object.keys(matches).includes(bracket)) {
      const popped = stack.pop();
      if (matches[bracket] !== popped) return false;
    }
  }
  return !stack.length;
}

const s = '[()]({})';
console.log(balancedBrackets(s));
