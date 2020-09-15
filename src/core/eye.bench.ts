import { eye } from './eye';
import { bench } from '../bench';

bench(
  'NDArray',
  'eye',
  (n: number): [number] => [n],
  (n: number): void => {
    eye(n);
  }
);
