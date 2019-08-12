import v = require('..');
import { bench } from '../bench';

const { floor, sqrt } = Math;

bench(
  'v',
  'multiply',
  (n: number): [v, v] => [v.random(floor(sqrt(n)), floor(sqrt(n))), v.random(floor(sqrt(n)), floor(sqrt(n)))],
  (x: v, y: v): void => {
    x.multiply(y);
  },
  (x: v, y: v): void => {
    v.multiply(x, y);
  }
);
