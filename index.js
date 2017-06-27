var evens = [0, 2, 4, 6, 8, 10];

evens.forEach(even => {
  console.log(`${even} is not odd!`);
});

function evenFn(even, index, array) {
  console.log(`${even} is not odd!`);
}

for (let i = 0; i < evens.length; i++) {
  evenFn(evens[i], i, evens);
}

function square(n) {
  console.log(n * n)
}

function doToEvens(callback) {
  evens.forEach(callback);
}

function doToElementsInArray(array, callback) {
  array.forEach(callback);
}

function changeCompletely(element, index, array) {
  array[index] = Math.floor(Math.random() * 100 + 2).toString() + ` ${array[index]}s!!!`;
}

var animals = ["dog", "cat", "squirrel"];

doToElementsInArray(animals, changeCompletely);

// log out animals -- pretty cool, right?
console.log(animals);
