import v = require('..');
import { bench } from '../bench';

const { floor, sqrt } = Math;
const r: (n: number) => v = (n: number): v => v.random(floor(sqrt(n)), floor(sqrt(n)));

bench(
  'v',
  'augment',
  (n: number): [v, v] => [r(n), r(n)],
  (x: v, y: v): void => {
    x.augment(y);
  },
  (x: v, y: v): void => {
    v.augment(x, y);
  }
);
