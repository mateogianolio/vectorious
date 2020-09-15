import { slice } from './slice';
import { random } from './random';
import { bench } from '../bench';

bench(
  'NDArray',
  'copy',
  (n: number) => [random(n), 0, Math.floor(Math.random() * n), n],
  (x, start: number, step: number, end: number): void => {
    x.slice(start, step, end);
  },
  (x, start: number, step: number, end: number): void => {
    slice(x, start, step, end);
  }
);
