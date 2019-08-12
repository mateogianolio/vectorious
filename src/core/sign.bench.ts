import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'sign',
  (n: number): [v] => [v.random(n)],
  (x: v): void => {
    x.sign();
  },
  (x: v): void => {
    v.sign(x);
  }
);
