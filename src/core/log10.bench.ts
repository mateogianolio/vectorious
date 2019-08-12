import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'log10',
  (n: number): [v] => [v.random(n)],
  (x: v): void => {
    x.log10();
  },
  (x: v): void => {
    v.log10(x);
  }
);
