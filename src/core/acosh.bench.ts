import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'acosh',
  (n: number): [v] => [v.random(n)],
  (x: v): void => {
    x.acosh();
  },
  (x: v): void => {
    v.acosh(x);
  }
);
