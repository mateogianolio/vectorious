import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'mean',
  (n: number): [v] => [v.random(n)],
  (x: v): void => {
    x.mean();
  },
  (x: v): void => {
    v.mean(x);
  }
);
