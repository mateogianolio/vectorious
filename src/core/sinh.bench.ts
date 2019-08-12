import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'sinh',
  (n: number): [v] => [v.random(n)],
  (x: v): void => {
    x.sinh();
  },
  (x: v): void => {
    v.sinh(x);
  }
);
