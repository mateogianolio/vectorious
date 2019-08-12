import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'norm',
  (n: number): [v] => [v.random(n)],
  (x: v): void => {
    x.norm();
  },
  (x: v): void => {
    v.norm(x);
  }
);
