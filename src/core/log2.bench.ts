import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'log2',
  (n: number): [v] => [v.random(n)],
  (x: v): void => {
    x.log2();
  },
  (x: v): void => {
    v.log2(x);
  }
);
