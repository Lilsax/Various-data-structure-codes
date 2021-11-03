function sumAll(arr) {
  let sum = 0;

  for (
    let i = arr.sort((a, b) => a - b)[0];
    i <= arr.sort((a, b) => a - b)[1];
    i++
  ) {
    sum += i;
  }

  return sum;
}

console.log(sumAll([1, 2]));
