import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'atanh',
  (n: number): [v] => [v.random(n)],
  (x: v): void => {
    x.atanh();
  },
  (x: v): void => {
    v.atanh(x);
  }
);
