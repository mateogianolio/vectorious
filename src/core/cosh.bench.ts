import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'cosh',
  (n: number): [v] => [v.random(n)],
  (x: v): void => {
    x.cosh();
  },
  (x: v): void => {
    v.cosh(x);
  }
);
