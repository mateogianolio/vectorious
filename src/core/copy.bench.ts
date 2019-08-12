import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'copy',
  (n: number): [v] => [v.random(n)],
  (x: v): void => {
    x.copy();
  },
  (x: v): void => {
    v.copy(x);
  }
);
