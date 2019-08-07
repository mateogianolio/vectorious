import { bench } from '../bench';

import { NDArray } from './';

const r: (n: number) => NDArray = (n: number): NDArray => NDArray.random(n);

bench(
  'NDArray',
  'cross',
  (): [NDArray, NDArray] => [r(3), r(3)],
  (x: NDArray, y: NDArray): void => {
    x.cross(y);
  },
  (x: NDArray, y: NDArray): void => {
    NDArray.cross(x, y);
  }
);
