import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'atan',
  (n: number): [v] => [v.random(n)],
  (x: v): void => {
    x.atan();
  },
  (x: v): void => {
    v.atan(x);
  }
);
