import { bench } from '../bench';

import { NDArray } from './';

const { floor, sqrt } = Math;
const r: (n: number) => NDArray = (n: number): NDArray => NDArray.random(floor(sqrt(n)), floor(sqrt(n)));

bench(
  'NDArray',
  'gauss',
  (n: number): [NDArray] => [r(n)],
  (x: NDArray): void => {
    x.gauss();
  },
  (x: NDArray): void => {
    NDArray.gauss(x);
  }
);
