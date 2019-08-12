import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'scale',
  (n: number): [v, number] => [v.random(n), Math.random()],
  (x: v, alpha: number) => {
    x.scale(alpha);
  },
  (x: v, alpha: number) => {
    v.scale(x, alpha);
  }
);
