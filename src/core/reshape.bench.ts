import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'reshape',
  (n: number): [v, number] => [v.random(n), n],
  (x: v, n: number): void => {
    x.reshape(n);
  },
  (x: v, n: number): void => {
    v.reshape(x, n);
  }
);
