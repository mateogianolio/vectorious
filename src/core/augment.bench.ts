import v = require('..');
import { bench } from '../bench';

const { floor, sqrt } = Math;

bench(
  'v',
  'augment',
  (n: number): [v, v] => [v.random(floor(sqrt(n)), floor(sqrt(n))), v.random(floor(sqrt(n)), floor(sqrt(n)))],
  (x: v, y: v): void => {
    x.augment(y);
  },
  (x: v, y: v): void => {
    v.augment(x, y);
  }
);
