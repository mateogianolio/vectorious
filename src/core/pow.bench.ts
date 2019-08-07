import { bench } from '../bench';

import { NDArray } from './';

const { random } = Math;
const r: (n: number) => NDArray = (n: number): NDArray =>
  new NDArray(new Float32Array(n)).fill(random);

bench(
  'NDArray',
  'pow',
  (n: number): [NDArray, number] => [r(n), random()],
  (x: NDArray, exponent: number): void => {
    x.pow(exponent);
  },
  (x: NDArray, exponent: number): void => {
    NDArray.pow(x, exponent);
  }
);
