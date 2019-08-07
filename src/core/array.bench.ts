import { bench } from '../bench';

import { NDArray } from './';

bench(
  'NDArray',
  'array',
  (n: number): [number] => [n],
  (n: number): void => {
    NDArray.array(new Array(n));
  }
);
