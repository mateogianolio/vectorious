import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'add',
  (n: number): [v, v] => [v.random(n), v.random(n)],
  (x: v, y: v): void => {
    x.add(y);
  },
  (x: v, y: v): void => {
    v.add(x, y);
  }
);
