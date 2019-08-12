import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'product',
  (n: number): [v, v] => [v.random(n), v.random(n)],
  (x: v, y: v): void => {
    x.product(y);
  },
  (x: v, y: v): void => {
    v.product(x, y);
  }
);
