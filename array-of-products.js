// function arrayOfProducts(array) {
//   const res = [];

//   for (let i = 0; i < array.length; i++) {
//     let tempProduct = 1;
//     for (let j = 0; j < array.length; j++) {
//       if (j === i) continue;
//       tempProduct *= array[j];
//     }
//     res.push(tempProduct);
//   }

//   return res;
// }

function arrayOfProducts(array) {
  const products = new Array(array.length).fill(1);

  let lefts = 1;
  for (let i = 0; i < array.length; i++) {
    products[i] *= lefts;
    lefts *= array[i];
  }

  let rights = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    products[i] *= rights;
    rights *= array[i];
  }

  return products;
}

console.log(arrayOfProducts([5,1,4,2]))