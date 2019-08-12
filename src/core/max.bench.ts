import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'max',
  (n: number): [v] => [v.random(n)],
  (x: v): void => {
    x.max();
  },
  (x: v): void => {
    v.max(x);
  }
);
