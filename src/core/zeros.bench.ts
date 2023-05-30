import { zeros } from './zeros';
import { bench } from '../bench';

bench(
  'core',
  'zeros',
  (n: number): [number] => [n],
  (n: number): void => {
    zeros(n);
  }
);
