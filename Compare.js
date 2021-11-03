function diffArray(arr1, arr2) {
  let newArr = [];
  let set = new Set([...arr1, ...arr2]);

  [...set].map((item) => {
    if (!arr1.includes(item)) {
      newArr.push(item);
    }

    if (!arr2.includes(item)) {
      newArr.push(item);
    }
  });

  return newArr;
}

console.log(diffArray([1, 2, 3, 4], [1, 2, 3, 4, 5]));
