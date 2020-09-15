import { zeros } from './zeros';
import { bench } from '../bench';

bench(
  'NDArray',
  'zeros',
  (n: number): [number] => [n],
  (n: number): void => {
    zeros(n);
  }
);
