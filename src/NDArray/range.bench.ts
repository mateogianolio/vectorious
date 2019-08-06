import { bench } from '../bench';

import { NDArray } from './';

bench(
  'NDArray',
  'range',
  (n: number): [number, number] => [0, n],
  (start: number, end: number): void => {
    NDArray.range(start, end);
  }
);
