import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'fill',
  (n: number): [v, number] => [v.random(n), Math.random()],
  (x: v, value: number) => {
    x.fill(value);
  },
  (x: v, value: number) => {
    v.fill(x, value);
  }
);
