import { bench } from '../bench';

import { NDArray } from './';

bench(
  'NDArray',
  'eye',
  (n: number): [number] => [n],
  (n: number): void => {
    NDArray.eye(n);
  }
);
