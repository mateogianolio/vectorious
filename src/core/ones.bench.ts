import { bench } from '../bench';

import { NDArray } from './';

bench(
  'NDArray',
  'ones',
  (n: number): [number] => [n],
  (n: number): void => {
    NDArray.ones(n);
  }
);
