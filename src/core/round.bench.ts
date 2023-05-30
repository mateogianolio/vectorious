import { round } from './round';
import { random } from './random';
import { bench } from '../bench';

bench(
  'core',
  'round',
  (n: number) => [random(n)],
  (x): void => {
    x.round();
  },
  (x): void => {
    round(x);
  }
);
