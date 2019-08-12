import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'asinh',
  (n: number): [v] => [v.random(n)],
  (x: v): void => {
    x.asinh();
  },
  (x: v): void => {
    v.asinh(x);
  }
);
