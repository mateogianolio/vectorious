import { bench } from '../bench';

import { Matrix } from './';

bench(
  'Matrix',
  'magic',
  (n: number): [number] => [n],
  (n: number): void => {
    Matrix.magic(n);
  }
);
