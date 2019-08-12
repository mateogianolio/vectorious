import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'floor',
  (n: number): [v] => [v.random(n)],
  (x: v): void => {
    x.floor();
  },
  (x: v): void => {
    v.floor(x);
  }
);
