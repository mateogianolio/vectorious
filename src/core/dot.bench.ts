import { bench } from '../bench';

import { NDArray } from './';

const { random } = Math;
const r: (n: number) => NDArray = (n: number): NDArray =>
  new NDArray(new Float32Array(n)).fill(random);

bench(
  'NDArray',
  'dot',
  (n: number): [NDArray, NDArray] => [r(n), r(n)],
  (x: NDArray, y: NDArray): void => {
    x.dot(y);
  },
  (x: NDArray, y: NDArray): void => {
    NDArray.dot(x, y);
  }
);
