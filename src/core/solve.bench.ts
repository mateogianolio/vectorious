import v = require('..');
import { bench } from '../bench';

const { floor, sqrt } = Math;

bench(
  'v',
  'solve',
  (n: number): [v, v] => [v.random(floor(sqrt(n)), floor(sqrt(n))), v.random(floor(sqrt(n)), 1)],
  (x: v, y: v): void => {
    x.solve(y);
  },
  (x: v, y: v): void => {
    v.solve(x, y);
  }
);
