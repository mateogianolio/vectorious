import { array } from './array';
import { bench } from '../bench';

bench(
  'core',
  'array',
  (n: number): [number] => [n],
  (n: number): void => {
    array(new Array(n));
  }
);
