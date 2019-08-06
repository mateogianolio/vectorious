import { bench } from '../bench';

import { NDArray } from './';

const { random, floor } = Math;
const r: (n: number) => NDArray = (n: number): NDArray =>
  new NDArray(new Float32Array(n)).fill(random);

bench(
  'NDArray',
  'check',
  (n: number): [NDArray, number] => [r(n), floor(random() * n)],
  (x: NDArray, i: number): void => {
    x.check(i);
  },
  (x: NDArray, i: number): void => {
    NDArray.check(x, i);
  }
);
