import { bench } from '../bench';

import { NDArray } from './';

const r: (n: number) => NDArray = (n: number): NDArray => NDArray.random(n);

bench(
  'NDArray',
  'toString',
  (n: number): [NDArray] => [r(n)],
  (x: NDArray): void => {
    x.toString();
  },
  (x: NDArray): void => {
    NDArray.toString(x);
  }
);
