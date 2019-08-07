import { bench } from '../bench';

import { NDArray } from './';

const { floor, random, sqrt } = Math;
const r: (n: number) => NDArray = (n: number): NDArray => NDArray.random(floor(sqrt(n)), floor(sqrt(n)));

bench(
  'NDArray',
  'row_add',
  (n: number): [NDArray, number, number] => [r(n), floor(random() * floor(sqrt(n))), floor(random() * floor(sqrt(n)))],
  (x: NDArray, dest: number, source: number): void => {
    x.row_add(dest, source);
  },
  (x: NDArray, dest: number, source: number): void => {
    NDArray.row_add(x, dest, source);
  }
);
