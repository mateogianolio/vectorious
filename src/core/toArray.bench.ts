import { bench } from '../bench';

import { NDArray } from './';

const r: (n: number) => NDArray = (n: number): NDArray => NDArray.random(n);

bench(
  'NDArray',
  'toArray',
  (n: number): [NDArray] => [r(n)],
  (x: NDArray): void => {
    x.toArray();
  },
  (x: NDArray): void => {
    NDArray.toArray(x);
  }
);
