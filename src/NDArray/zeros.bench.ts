import { bench } from '../bench';

import { NDArray } from './';

bench(
  'NDArray',
  'zeros',
  (n: number): [number] => [n],
  (n: number): void => {
    NDArray.zeros(n);
  }
);
