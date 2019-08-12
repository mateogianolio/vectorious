import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'tan',
  (n: number): [v] => [v.random(n)],
  (x: v): void => {
    x.tan();
  },
  (x: v): void => {
    v.tan(x);
  }
);
