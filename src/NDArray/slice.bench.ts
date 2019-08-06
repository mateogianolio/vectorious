import { bench } from '../bench';

import { NDArray } from './';

const { random, floor } = Math;
const r: (n: number) => NDArray = (n: number): NDArray =>
  new NDArray(new Float32Array(n)).fill(random);

bench(
  'NDArray',
  'copy',
  (n: number): [NDArray, number, number, number] => [r(n), 0, floor(random() * n), n],
  (x: NDArray, start: number, step: number, end: number): void => {
    x.slice(start, step, end);
  },
  (x: NDArray, start: number, step: number, end: number): void => {
    NDArray.slice(x, start, step, end);
  }
);
