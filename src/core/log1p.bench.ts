import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'log1p',
  (n: number): [v] => [v.random(n)],
  (x: v): void => {
    x.log1p();
  },
  (x: v): void => {
    v.log1p(x);
  }
);
