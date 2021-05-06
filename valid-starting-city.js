/*
Input:
  1. distances = ARRAY of NUMBERS
  2. fuel = ARRAY of NUMBERS
  3. mpg = NUMBER

Output: NUMBER (index of the valid starting city)
*/

function validStartingCity(distances, fuel, mpg) {
  // distances:     [5, 25, 15, 10, 15]
  // mpg of fuel: [10, 20, 10, 0, 30]
  const fuelMiles = fuel.map((gal) => gal * mpg);

  for (let i = 0; i < fuelMiles.length; i++) {
    if (isValid(distances, fuelMiles, i)) return i;
  }

  return -1;
}

const isValid = (distances, fuelMiles, startingCity) => {
  let citiesTraveled = 0;
  let currentCity = startingCity;
  let fuel = 0;

  while (citiesTraveled <= distances.length) {
    if (currentCity === distances.length) {
      currentCity = 0;
    }
    fuel += fuelMiles[currentCity];
    fuel -= distances[currentCity];

    if (fuel < 0) return false;

    currentCity++;
    citiesTraveled++;
  }

  return true;
};

const distances = [5, 25, 15, 10, 15];
const fuel = [1, 2, 1, 0, 3];
const mpg = 10;

console.log(validStartingCity(distances, fuel, mpg));
