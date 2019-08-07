import { bench } from '../bench';

import { NDArray } from './';

const { random, floor } = Math;
const r: (n: number) => NDArray = (n: number): NDArray =>
  new NDArray(new Float32Array(n)).fill(random);

bench(
  'NDArray',
  'set',
  (n: number): [NDArray, number, number] => [r(n), floor(random() * n),  random()],
  (x: NDArray, i: number, alpha: number) => {
    x.set(i, alpha);
  },
  (x: NDArray, i: number, alpha: number) => {
    NDArray.set(x, i, alpha);
  }
);
