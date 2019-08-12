import v = require('..');
import { bench } from '../bench';

const r: (n: number) => v = (n: number): v => v.random(n);

bench(
  'v',
  'normalize',
  (n: number): [v] => [r(n)],
  (x: v): void => {
    x.normalize();
  },
  (x: v): void => {
    v.normalize(x);
  }
);
