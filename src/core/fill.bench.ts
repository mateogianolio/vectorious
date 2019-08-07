import { bench } from '../bench';

import { NDArray } from './';

const { random } = Math;
const r: (n: number) => NDArray = (n: number): NDArray =>
  new NDArray(new Float32Array(n)).fill(random);

bench(
  'NDArray',
  'fill',
  (n: number): [NDArray, number] => [r(n), random()],
  (x: NDArray, value: number) => {
    x.fill(value);
  },
  (x: NDArray, value: number) => {
    NDArray.fill(x, value);
  }
);
