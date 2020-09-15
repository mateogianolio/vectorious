import { binOp } from './binOp';
import { random } from './random';
import { bench } from '../bench';

bench(
  'NDArray',
  'binOp',
  (n: number) => [random(n), random(n), (a: number, b: number): number => a + b],
  (x, y, op: (a: number, b: number) => number): void => {
    x.binOp(y, op);
  },
  (x, y, op: (a: number, b: number) => number): void => {
    binOp(x, y, op);
  }
);
