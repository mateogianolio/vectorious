import v = require('..');
import { bench } from '../bench';

const { floor, sqrt } = Math;

bench(
  'v',
  'square',
  (n: number): [v] => [v.random(floor(sqrt(n)), floor(sqrt(n)))],
  (x: v): void => {
    x.square();
  },
  (x: v): void => {
    v.square(x);
  }
);
