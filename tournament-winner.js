const tournamentWinner = (competitions, results) => {
  const wins = {};
  let winning;
  for (let i = 0; i < competitions.length; i++) {
    const home = competitions[i][0];
    const away = competitions[i][1];
    if (results[i] === 1) {
      wins[home] ? wins[home]++ : wins[home] = 1;
      if (!winning || wins[home] > wins[winning]) winning = home;
    } else {
      wins[away] ? wins[away]++ : wins[away] = 1;
      if (!winning || wins[away] > wins[winning]) winning = away;
    }
  }
  return winning;
}

const competitions = [
  ['HTML', 'C#'],
  ['C#', 'Python'],
  ['Python', 'HTML']
]
const results = [0,0,1];
console.log(tournamentWinner(competitions, results)); // Python