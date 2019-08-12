import v = require('..');
import { bench } from '../bench';

const { floor, sqrt } = Math;

bench(
  'v',
  'rank',
  (n: number): [v] => [v.random(floor(sqrt(n)), floor(sqrt(n)))],
  (x: v): void => {
    x.rank();
  },
  (x: v): void => {
    v.rank(x);
  }
);
