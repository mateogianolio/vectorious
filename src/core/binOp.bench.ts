import v = require('..');
import { bench } from '../bench';

const { random } = Math;
const r: (n: number) => v = (n: number): v =>
  v.array(new Float32Array(n)).fill(random);

bench(
  'v',
  'binOp',
  (n: number): [v, v, (a: number, b: number) => number] =>
    [r(n), r(n), (a: number, b: number): number => a + b],
  (x: v, y: v, op: (a: number, b: number) => number): void => {
    x.binOp(y, op);
  },
  (x: v, y: v, op: (a: number, b: number) => number): void => {
    v.binOp(x, y, op);
  }
);
