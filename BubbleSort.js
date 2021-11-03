function bubbleSort(a) {
  for (let i = 0; i < a.length; i++) {
    for (let k = 0; k < a.length; k++) {
      if (a[i] < a[k]) {
        let temp = a[i];
        a[i] = a[k];
        a[k] = temp;
      }
    }
  }
  return a;
}

console.log(bubbleSort([1, 9, 2, 8, 4, 8, 5, 6]));
