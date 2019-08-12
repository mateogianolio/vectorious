import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'cos',
  (n: number): [v] => [v.random(n)],
  (x: v): void => {
    x.cos();
  },
  (x: v): void => {
    v.cos(x);
  }
);
