import { ones } from './ones';
import { bench } from '../bench';

bench(
  'core',
  'ones',
  (n: number): [number] => [n],
  (n: number): void => {
    ones(n);
  }
);
