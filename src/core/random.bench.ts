import { random } from './random';
import { bench } from '../bench';

bench(
  'v',
  'random',
  (n: number): [number] => [n],
  (n: number): void => {
    random(n);
  }
);
