import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'min',
  (n: number): [v] => [v.random(n)],
  (x: v): void => {
    x.min();
  },
  (x: v): void => {
    v.min(x);
  }
);
