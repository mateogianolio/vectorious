import v = require('..');
import { bench } from '../bench';

const { floor, sqrt } = Math;
const r: (n: number) => v = (n: number): v => v.random(floor(sqrt(n)), floor(sqrt(n)));

bench(
  'v',
  'lu_factor',
  (n: number): [v] => [r(n)],
  (x: v): void => {
    x.lu_factor();
  },
  (x: v): void => {
    v.lu_factor(x);
  }
);
