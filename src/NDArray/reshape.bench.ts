import { bench } from '../bench';

import { NDArray } from './';

const { random } = Math;
const r: (n: number) => NDArray = (n: number): NDArray =>
  new NDArray(new Float32Array(n)).fill(random);

bench(
  'NDArray',
  'reshape',
  (n: number): [NDArray, number] => [r(n), n],
  (x: NDArray, n: number): void => {
    x.reshape(n);
  },
  (x: NDArray, n: number): void => {
    NDArray.reshape(x, n);
  }
);
