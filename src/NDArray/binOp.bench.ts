import { bench } from '../bench';

import { NDArray } from './';

const { random } = Math;
const r: (n: number) => NDArray = (n: number): NDArray =>
  new NDArray(new Float32Array(n)).fill(random);

bench(
  'NDArray',
  'binOp',
  (n: number): [NDArray, NDArray, (a: number, b: number) => number] =>
    [r(n), r(n), (a: number, b: number): number => a + b],
  (x: NDArray, y: NDArray, op: (a: number, b: number) => number): void => {
    x.binOp(y, op);
  },
  (x: NDArray, y: NDArray, op: (a: number, b: number) => number): void => {
    NDArray.binOp(x, y, op);
  }
);
