import { bench } from '../bench';

import { NDArray } from './';

const { random } = Math;
const r: (n: number) => NDArray = (n: number): NDArray =>
  new NDArray(new Float32Array(n)).fill(random);

bench(
  'NDArray',
  'reduce',
  (n: number): [NDArray] => [r(n)],
  (x: NDArray): void => {
    x.reduce((value: number) => value);
  },
  (x: NDArray): void => {
    NDArray.reduce(x, (value: number) => value);
  }
);
