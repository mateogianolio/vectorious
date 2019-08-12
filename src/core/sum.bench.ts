import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'abs',
  (n: number): [v] => [v.random(n)],
  (x: v): void => {
    x.sum();
  },
  (x: v): void => {
    v.sum(x);
  }
);
