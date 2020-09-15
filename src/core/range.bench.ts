import { range } from './range';
import { bench } from '../bench';

bench(
  'NDArray',
  'range',
  (n: number): [number, number] => [0, n],
  (start: number, end: number): void => {
    range(start, end);
  }
);
