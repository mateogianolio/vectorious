import { atan } from './atan';
import { random } from './random';
import { bench } from '../bench';

bench(
  'NDArray',
  'atan',
  (n: number) => [random(n)],
  (x): void => {
    x.atan();
  },
  (x): void => {
    atan(x);
  }
);
