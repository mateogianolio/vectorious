import v = require('..');
import { bench } from '../bench';

const { floor, sqrt } = Math;
const r: (n: number) => v = (n: number): v => v.random(floor(sqrt(n)), floor(sqrt(n)));

bench(
  'v',
  'trace',
  (n: number): [v] => [r(n)],
  (x: v): void => {
    x.trace();
  },
  (x: v): void => {
    v.trace(x);
  }
);
