import v = require('..');
import { bench } from '../bench';

const { floor, sqrt } = Math;

bench(
  'v',
  'diag',
  (n: number): [v] => [v.random(floor(sqrt(n)), floor(sqrt(n)))],
  (x: v): void => {
    x.diagonal();
  },
  (x: v): void => {
    v.diagonal(x);
  }
);
