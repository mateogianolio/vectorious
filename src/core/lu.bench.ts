import { bench } from '../bench';

import { NDArray } from './';

const { floor, sqrt } = Math;
const r: (n: number) => NDArray = (n: number): NDArray => NDArray.random(floor(sqrt(n)), floor(sqrt(n)));

bench(
  'NDArray',
  'lu',
  (n: number): [NDArray] => [r(n)],
  (x: NDArray): void => {
    x.lu();
  },
  (x: NDArray): void => {
    NDArray.lu(x);
  }
);
