import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'asin',
  (n: number): [v] => [v.random(n)],
  (x: v): void => {
    x.asin();
  },
  (x: v): void => {
    v.asin(x);
  }
);
