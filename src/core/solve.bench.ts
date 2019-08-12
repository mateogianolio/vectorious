import v = require('..');
import { bench } from '../bench';

const { floor, sqrt } = Math;
const r: (n: number) => v = (n: number): v => v.random(floor(sqrt(n)), floor(sqrt(n)));
const rhs: (n: number) => v = (n: number): v => v.random(floor(sqrt(n)), 1);

bench(
  'v',
  'solve',
  (n: number): [v, v] => [r(n), rhs(n)],
  (x: v, y: v): void => {
    x.solve(y);
  },
  (x: v, y: v): void => {
    v.solve(x, y);
  }
);
