import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'log',
  (n: number): [v] => [v.random(n)],
  (x: v): void => {
    x.log();
  },
  (x: v): void => {
    v.log(x);
  }
);
