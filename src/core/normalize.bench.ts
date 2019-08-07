import { bench } from '../bench';

import { NDArray } from './';

const r: (n: number) => NDArray = (n: number): NDArray => NDArray.random(n);

bench(
  'NDArray',
  'normalize',
  (n: number): [NDArray] => [r(n)],
  (x: NDArray): void => {
    x.normalize();
  },
  (x: NDArray): void => {
    NDArray.normalize(x);
  }
);
