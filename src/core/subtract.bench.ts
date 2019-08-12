import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'subtract',
  (n: number): [v, v] => [v.random(n), v.random(n)],
  (x: v, y: v): void => {
    x.subtract(y);
  },
  (x: v, y: v): void => {
    v.subtract(x, y);
  }
);
