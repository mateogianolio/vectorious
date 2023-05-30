import { range } from './range';
import { bench } from '../bench';

bench(
  'core',
  'range',
  (n: number): [number, number] => [0, n],
  (start: number, end: number): void => {
    range(start, end);
  }
);
