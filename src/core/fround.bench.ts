import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'fround',
  (n: number): [v] => [v.random(n)],
  (x: v): void => {
    x.fround();
  },
  (x: v): void => {
    v.fround(x);
  }
);
