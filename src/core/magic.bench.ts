import { bench } from '../bench';

import { NDArray } from './';

bench(
  'NDArray',
  'magic',
  (n: number): [number] => [n],
  (n: number): void => {
    NDArray.magic(n);
  }
);
