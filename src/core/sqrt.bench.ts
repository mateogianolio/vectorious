import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'sqrt',
  (n: number): [v] => [v.random(n)],
  (x: v): void => {
    x.sqrt();
  },
  (x: v): void => {
    v.sqrt(x);
  }
);
