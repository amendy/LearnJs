const data = [1, 2, 3, 4, 5];

const mappedArray = data.map(
  (value, index, array) => value -1
);

console.log(mappedArray);

const filteredArray = data.filter(
  (value, index, array) => value > 2
);

console.log(filteredArray);

const reducedValueFromArray = data.reduce(
  (total, value, index, array) => total + value,
  0
);

console.log(reducedValueFromArray);

console.log(
  data
    .filter(value => value > 3)
    .map(value => value + 1)
    .reduce(
      (total, value) => total + value,
      0
    )
);

const highestValue = data.reduce(
  (total, value) => (
    value > total
      ? value
      : total
  ),
  0
)

console.log(highestValue);

const specificValue = data.find(
  value => value === 3
);

console.log(specificValue);
