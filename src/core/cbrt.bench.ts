import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'cbrt',
  (n: number): [v] => [v.random(n)],
  (x: v): void => {
    x.cbrt();
  },
  (x: v): void => {
    v.cbrt(x);
  }
);
