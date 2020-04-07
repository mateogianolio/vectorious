import { matrix } from './matrix';
import { bench } from '../bench';

bench(
  'v',
  'matrix',
  (n: number): [number] => [n],
  (n: number): void => {
    matrix(n, n);
  }
);
