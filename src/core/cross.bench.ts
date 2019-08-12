import v = require('..');
import { bench } from '../bench';

const r: (n: number) => v = (n: number): v => v.random(n);
bench(
  'v',
  'cross',
  (): [v, v] => [v.random(3), v.random(3)],
  (x: v, y: v): void => {
    x.cross(y);
  },
  (x: v, y: v): void => {
    v.cross(x, y);
  }
);
