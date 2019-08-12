import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'reciprocal',
  (n: number): [v] => [v.random(n)],
  (x: v): void => {
    x.reciprocal();
  },
  (x: v): void => {
    v.reciprocal(x);
  }
);
