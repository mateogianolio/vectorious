import { bench } from '../bench';

import { NDArray } from './';

const { random } = Math;
const r: (n: number) => NDArray = (n: number): NDArray =>
  new NDArray(new Float32Array(n)).fill(random);

bench(
  'NDArray',
  'scale',
  (n: number): [NDArray, number] => [r(n), random()],
  (x: NDArray, alpha: number) => {
    x.scale(alpha);
  },
  (x: NDArray, alpha: number) => {
    NDArray.scale(x, alpha);
  }
);
