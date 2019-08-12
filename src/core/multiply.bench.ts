import v = require('..');
import { bench } from '../bench';

const { floor, sqrt } = Math;
const r: (n: number) => v = (n: number): v => v.random(floor(sqrt(n)), floor(sqrt(n)));

bench(
  'v',
  'multiply',
  (n: number): [v, v] => [r(n), r(n)],
  (x: v, y: v): void => {
    x.multiply(y);
  },
  (x: v, y: v): void => {
    v.multiply(x, y);
  }
);
