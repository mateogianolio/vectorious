import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'exp',
  (n: number): [v] => [v.random(n)],
  (x: v): void => {
    x.exp();
  },
  (x: v): void => {
    v.exp(x);
  }
);
