import v = require('../src');

const a: v = v.random(3, 3).scale(10);
const b: v = v.random(3, 1).scale(10);

console.log(`a: ${a}`);
console.log(`b: ${b}`);
console.log(`a.solve(b): ${a.solve(b)}`);
