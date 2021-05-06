/*
Input: 
  1. k = NUMBER of workers
  2. tasks = ARRAY of times it takes for tasks to be completed
*/

function taskAssignment(k, tasks) {
  const sortedTimes = tasks.slice().sort((a, b) => a - b); // [1,1,3,3,4,5]
  const res = [];

  let sortedStart = 0;
  let sortedEnd = sortedTimes.length - 1;

  while (sortedStart < sortedEnd) {
    const lowTaskTime = sortedTimes[sortedStart];
    const highTaskTime = sortedTimes[sortedEnd];

    const lowTaskTimeIdx = tasks.indexOf(lowTaskTime);
    tasks[lowTaskTimeIdx] = -1;
    const highTaskTimeIdx = tasks.indexOf(highTaskTime);
    tasks[highTaskTimeIdx] = -1;

    const temp = [];

    temp.push(lowTaskTimeIdx);
    temp.push(highTaskTimeIdx);

    res.push(temp);

    sortedStart++;
    sortedEnd--;
  }

  return res;
}

const k = 3;
const tasks = [1, 3, 5, 3, 1, 4];

console.log(taskAssignment(k, tasks));
