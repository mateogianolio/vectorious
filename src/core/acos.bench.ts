import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'acos',
  (n: number): [v] => [v.random(n)],
  (x: v): void => {
    x.acos();
  },
  (x: v): void => {
    v.acos(x);
  }
);
