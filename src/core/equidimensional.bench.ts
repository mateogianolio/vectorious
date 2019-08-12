import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'equidimensional',
  (n: number): [v, v] => [v.random(n), v.random(n)],
  (x: v, y: v): void => {
    x.equidimensional(y);
  },
  (x: v, y: v): void => {
    v.equidimensional(x, y);
  }
);
