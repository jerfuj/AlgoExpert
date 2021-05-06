const isValidSubsequence = (array, sequence) => {
  let currArrIdx = 0;
  let currSeqIdx = 0;

  while (currArrIdx < array.length) {
    if (array[currArrIdx] === sequence[currSeqIdx]) currSeqIdx++;
    if (currSeqIdx === sequence.length) return true;
    currArrIdx++;
  }
  return false;
}

const arr = [5,1,22,25,6,-1,8,10];
const seq = [1,6,-1,10];
console.log(isValidSubsequence(arr, seq)) // true