import v = require('..');
import { bench } from '../bench';

const r: (n: number) => v = (n: number): v => v.random(n);

bench(
  'v',
  'angle',
  (n: number): [v, v] => [r(n), r(n)],
  (x: v, y: v): void => {
    x.angle(y);
  },
  (x: v, y: v): void => {
    v.angle(x, y);
  }
);
