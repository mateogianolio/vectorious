import { bench } from '../bench';

import { NDArray } from './';

const { random, floor } = Math;
const r: (n: number) => NDArray = (n: number): NDArray =>
  new NDArray(new Float32Array(n)).fill(random);

bench(
  'NDArray',
  'get',
  (n: number): [NDArray, number] => [r(n), floor(random() * n)],
  (x: NDArray, i: number) => {
    x.get(i);
  },
  (x: NDArray, i: number) => {
    NDArray.get(x, i);
  }
);
