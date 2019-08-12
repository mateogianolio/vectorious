import v = require('..');
import { bench } from '../bench';

const { floor, sqrt } = Math;

bench(
  'v',
  'gauss',
  (n: number): [v] => [v.random(floor(sqrt(n)), floor(sqrt(n)))],
  (x: v): void => {
    x.gauss();
  },
  (x: v): void => {
    v.gauss(x);
  }
);
