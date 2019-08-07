import { bench } from '../bench';

import { NDArray } from './';

const { floor, sqrt } = Math;
const r: (n: number) => NDArray = (n: number): NDArray => NDArray.random(floor(sqrt(n)), floor(sqrt(n)));
const rhs: (n: number) => NDArray = (n: number): NDArray => NDArray.random(floor(sqrt(n)), 1);

bench(
  'NDArray',
  'solve',
  (n: number): [NDArray, NDArray] => [r(n), rhs(n)],
  (x: NDArray, y: NDArray): void => {
    x.solve(y);
  },
  (x: NDArray, y: NDArray): void => {
    NDArray.solve(x, y);
  }
);
