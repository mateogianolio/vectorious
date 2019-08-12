import v = require('..');
import { bench } from '../bench';

const { floor, sqrt } = Math;

bench(
  'v',
  'inv',
  (n: number): [v] => [v.random(floor(sqrt(n)), floor(sqrt(n)))],
  (x: v): void => {
    x.inv();
  },
  (x: v): void => {
    v.inv(x);
  }
);
