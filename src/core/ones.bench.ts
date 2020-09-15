import { ones } from './ones';
import { bench } from '../bench';

bench(
  'NDArray',
  'ones',
  (n: number): [number] => [n],
  (n: number): void => {
    ones(n);
  }
);
