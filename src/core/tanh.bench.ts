import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'tanh',
  (n: number): [v] => [v.random(n)],
  (x: v): void => {
    x.tanh();
  },
  (x: v): void => {
    v.tanh(x);
  }
);
