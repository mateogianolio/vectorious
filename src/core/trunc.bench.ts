import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'trunc',
  (n: number): [v] => [v.random(n)],
  (x: v): void => {
    x.trunc();
  },
  (x: v): void => {
    v.trunc(x);
  }
);
