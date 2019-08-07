import { bench } from '../bench';

import { NDArray } from './';

const r: (n: number) => NDArray = (n: number): NDArray => NDArray.random(n);

bench(
  'NDArray',
  'combine',
  (n: number): [NDArray, NDArray] => [r(n), r(n)],
  (x: NDArray, y: NDArray): void => {
    x.combine(y);
  },
  (x: NDArray, y: NDArray): void => {
    NDArray.combine(x, y);
  }
);
