import { magic } from './magic';
import { bench } from '../bench';

bench(
  'core',
  'magic',
  (n: number): [number] => [n],
  (n: number): void => {
    magic(n);
  }
);
