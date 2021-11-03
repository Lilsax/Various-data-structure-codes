bfs = (start) => {
  let visited = new Set();
  let queue = [];

  queue.push(start);
  while (queue.length) {
    let arrport = queue.shift();
    let hi = adjacencyList.get(arrport);

    for (let i of hi) {
      if (i === "test") {
        return console.log("founds");
      }

      if (!visited.has(i)) {
        visited.add(i);
        queue.push(i);
      }
    }
  }
};


function nextBiggest(arr) {
  let max = -Infinity, result = -Infinity;

  for (const value of arr) {
    const nr = Number(value)

    if (nr > max) {
      [result, max] = [max, nr] // save previous max
    } else if (nr < max && nr > result) {
      result = nr; // new second biggest
    }
  }

  return result;
}