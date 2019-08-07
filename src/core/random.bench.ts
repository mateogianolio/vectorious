import { bench } from '../bench';

import { NDArray } from './';

bench(
  'NDArray',
  'random',
  (n: number): [number] => [n],
  (n: number): void => {
    NDArray.random(n);
  }
);
