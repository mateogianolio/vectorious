import { ones } from './ones';
import { bench } from '../bench';

bench(
  'v',
  'ones',
  (n: number): [number] => [n],
  (n: number): void => {
    ones(n);
  }
);
