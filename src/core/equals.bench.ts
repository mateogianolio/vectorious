import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'equals',
  (n: number): [v, v] => [v.random(n), v.random(n)],
  (x: v, y: v): void => {
    x.equals(y);
  },
  (x: v, y: v): void => {
    v.equals(x, y);
  }
);
