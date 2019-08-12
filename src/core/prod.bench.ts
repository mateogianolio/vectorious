import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'prod',
  (n: number): [v] => [v.random(n)],
  (x: v): void => {
    x.prod();
  },
  (x: v): void => {
    v.prod(x);
  }
);
