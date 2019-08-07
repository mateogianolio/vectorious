import { bench } from '../bench';

import { NDArray } from './';

const { floor, sqrt } = Math;
const r: (n: number) => NDArray = (n: number): NDArray => NDArray.random(floor(sqrt(n)), floor(sqrt(n)));

bench(
  'NDArray',
  'lu_factor',
  (n: number): [NDArray] => [r(n)],
  (x: NDArray): void => {
    x.lu_factor();
  },
  (x: NDArray): void => {
    NDArray.lu_factor(x);
  }
);
