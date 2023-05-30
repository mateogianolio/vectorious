import { atan } from './atan';
import { random } from './random';
import { bench } from '../bench';

bench(
  'core',
  'atan',
  (n: number) => [random(n)],
  (x): void => {
    x.atan();
  },
  (x): void => {
    atan(x);
  }
);
