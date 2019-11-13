// Deklaration von Variablen & Ausgabe

let x = 3;
const y = 3; // Instanziierung einer konstanten Zahl

console.log(x, y);
console.log([ x, y ]);
console.log({ x, y });
console.log("Hello World");

// Spreading

const array1 = [1, 2, 3, 4];
const array2 = [0, ...array1, 5, 6, 7, 8];

console.log('SPREADING ARRAYS');
console.log(array2); // [1, 2, 3, 4, 5, 6, 7, 8]

const object1 = { a: 'test', b: null, c: 123 };
const object2 = { ...object1, d: [1, 2, 3], e: { ...object1 } };
console.log('SPREADING OBJECTS');
console.log(object2); // { a: 'test', b: null, c: 123, d: [] }

console.log('SPREADING FUNCTION ARGUMENTS');
const func = (arr, ...others) => console.log(...arr, ...others);
func([1, 2, 3], 4, 5, 6);

// Deconstruction

const { a } = object1;

console.log(a);

const { d: [first] } = object2; // extract first member of array in d of object2
const { e: { a: a_renamed }, b } = object2; // extract member a of object in e of object2 and rename it

console.log(first, a_renamed, b);

// Construction

const z = [x, y]; // Instanziierung eines Arrays
const z2 = { x, y }; // Instanziierung eines Objektes
// Äquivalent: { x: x, y: y } (Variablennamen werden als key benutzt)

console.log(z);
console.log(z2);
