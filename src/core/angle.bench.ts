import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'angle',
  (n: number): [v, v] => [v.random(n), v.random(n)],
  (x: v, y: v): void => {
    x.angle(y);
  },
  (x: v, y: v): void => {
    v.angle(x, y);
  }
);
