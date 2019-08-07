import { bench } from '../bench';

import { NDArray } from './';

const { floor, sqrt } = Math;
const r: (n: number) => NDArray = (n: number): NDArray => NDArray.random(floor(sqrt(n)), floor(sqrt(n)));

bench(
  'NDArray',
  'rank',
  (n: number): [NDArray] => [r(n)],
  (x: NDArray): void => {
    x.rank();
  },
  (x: NDArray): void => {
    NDArray.rank(x);
  }
);
