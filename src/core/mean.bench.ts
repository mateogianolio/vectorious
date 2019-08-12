import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'abs',
  (n: number): [v] => [v.random(n)],
  (x: v): void => {
    x.mean();
  },
  (x: v): void => {
    v.mean(x);
  }
);
