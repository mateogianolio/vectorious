import { eye } from './eye';
import { bench } from '../bench';

bench(
  'core',
  'eye',
  (n: number): [number] => [n],
  (n: number): void => {
    eye(n);
  }
);
