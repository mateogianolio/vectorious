import v = require('..');
import { bench } from '../bench';

const r: (n: number) => v = (n: number): v => v.random(n);

bench(
  'v',
  'toArray',
  (n: number): [v] => [r(n)],
  (x: v): void => {
    x.toArray();
  },
  (x: v): void => {
    v.toArray(x);
  }
);
