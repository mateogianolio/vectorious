import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'equilateral',
  (n: number): [v, v] => [v.random(n), v.random(n)],
  (x: v, y: v): void => {
    x.equilateral(y);
  },
  (x: v, y: v): void => {
    v.equilateral(x, y);
  }
);
