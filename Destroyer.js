function destoryer(arr) {
  let newArray = [];

  arr.map((item) => {
    if (![...arguments].includes(item)) {
      newArray.push(item);
    }
  });

  return newArray;
}
console.log(destoryer([1, 2, 3, 4, 5], 3, 2));
console.log(destoryer(["sleman", "khalid", "waseem"], "khalid", "waseem"));
