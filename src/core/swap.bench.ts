import { bench } from '../bench';

import { NDArray } from './';

const { floor, random, sqrt } = Math;
const r: (n: number) => NDArray = (n: number): NDArray => NDArray.random(floor(sqrt(n)), floor(sqrt(n)));

bench(
  'NDArray',
  'swap',
  (n: number): [NDArray, number, number] => [r(n), floor(random() * sqrt(n)), floor(random() * sqrt(n))],
  (x: NDArray, i: number, j: number): void => {
    x.swap(i, j);
  },
  (x: NDArray, i: number, j: number): void => {
    NDArray.swap(x, i, j);
  }
);
