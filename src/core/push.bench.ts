import { bench } from '../bench';

import { NDArray } from './';

const { random } = Math;
const r: (n: number) => NDArray = (n: number): NDArray => NDArray.random(n);

bench(
  'NDArray',
  'push',
  (n: number): [NDArray, number] => [r(n), random()],
  (x: NDArray, value: number): void => {
    x.push(value);
  },
  (x: NDArray, value: number): void => {
    NDArray.push(x, value);
  }
);
