import { magic } from './magic';
import { bench } from '../bench';

bench(
  'v',
  'magic',
  (n: number): [number] => [n],
  (n: number): void => {
    magic(n);
  }
);
