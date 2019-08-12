import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'expm1',
  (n: number): [v] => [v.random(n)],
  (x: v): void => {
    x.expm1();
  },
  (x: v): void => {
    v.expm1(x);
  }
);
