import v = require('..');
import { bench } from '../bench';

const r: (n: number) => v = (n: number): v => v.random(n);

bench(
  'v',
  'project',
  (n: number): [v, v] => [r(n), r(n)],
  (x: v, y: v): void => {
    x.project(y);
  },
  (x: v, y: v): void => {
    v.project(x, y);
  }
);
