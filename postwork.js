//Postwork
//Subir a github con capturas de pantalla de la respuesta/resultado. Miércoles 6pm.

//Deep Equal
console.log("\nDeep Equal");
function deepEqual(a, b) {
  // Code goes here
  if (typeof a == "object" && typeof b == "object") {
    let aKeys = Object.keys(a),
      bKeys = Object.keys(b);
    for (let i = 0; i < aKeys.length; i++) {
      var objPropertiesAreEqual = deepEqual(a[aKeys[i]], b[bKeys[i]]);
    }
    return objPropertiesAreEqual;
  } else {
    return a === b;
  }
}

var john = {
  firstName: "John",
  lastName: "Doe",
};

console.log("Test 1:", deepEqual(1, 1)); // true
console.log("Test 2:", deepEqual(1, "1")); // false
console.log("Test 3:", deepEqual(john, john)); // true
console.log("Test 4:", deepEqual(john, { firstName: "John", lastName: "Doe" })); // true
console.log("Test 5:", deepEqual(john, { firstName: "John" })); // false

//Chunks
console.log("\nChunks");
function chunk(array, size) {
  // Code goes here
  let chunks = [],
    chunkElement = [];
  let index = 0;
  for (let i = 0; i < array.length / size; i++) {
    for (let j = 0; j < size; j++) {
      if (!array[index]) break;
      chunkElement.push(array[index]);
      index++;
    }
    chunks.push(chunkElement);
    chunkElement = [];
  }
  return chunks;
}
var data = [1, 2, 3, 4, 5, 6, 7, 8];

console.log("Test 1:", chunk(data, 1)); // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log("Test 2:", chunk(data, 2)); // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log("Test 3:", chunk(data, 3)); // [[1, 2, 3], [4, 5, 6], [7, 8]]

//Frequency
console.log("\nFrequency");
function frequency(string) {
  // Code goes here
  let char = 97,
    count = 0,
    obj = {};
  for (let i = 33; i < 126; i++) {
    for (let j = 0; j < string.length; j++) {
      if (String.fromCharCode(i) == string[j]) count++;
    }
    if (count == 0) continue;
    obj[String.fromCharCode(i)] = count;
    count = 0;
  }
  return obj;
}

console.log("Test 1:", frequency("cccbbbaaa"));
// {a: 3, b: 3, c: 3}
console.log("Test 2:", frequency("www.bedu.org"));
// {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
console.log("Test 3:", frequency("john.doe@domain.com"));
// {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}