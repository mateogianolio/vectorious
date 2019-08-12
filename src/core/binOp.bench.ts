import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'binOp',
  (n: number): [v, v, (a: number, b: number) => number] =>
    [v.random(n), v.random(n), (a: number, b: number): number => a + b],
  (x: v, y: v, op: (a: number, b: number) => number): void => {
    x.binOp(y, op);
  },
  (x: v, y: v, op: (a: number, b: number) => number): void => {
    v.binOp(x, y, op);
  }
);
