import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'ceil',
  (n: number): [v] => [v.random(n)],
  (x: v): void => {
    x.ceil();
  },
  (x: v): void => {
    v.ceil(x);
  }
);
