import { bench } from '../bench';

import { NDArray } from './';

bench(
  'NDArray',
  'matrix',
  (n: number): [number] => [n],
  (n: number): void => {
    NDArray.matrix(n, n);
  }
);
