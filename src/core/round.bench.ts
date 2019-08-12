import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'round',
  (n: number): [v] => [v.random(n)],
  (x: v): void => {
    x.round();
  },
  (x: v): void => {
    v.round(x);
  }
);
