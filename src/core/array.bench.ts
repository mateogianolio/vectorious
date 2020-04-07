import { array } from './array';
import { bench } from '../bench';

bench(
  'v',
  'array',
  (n: number): [number] => [n],
  (n: number): void => {
    array(new Array(n));
  }
);
