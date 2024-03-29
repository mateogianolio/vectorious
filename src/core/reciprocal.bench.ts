import { reciprocal } from './reciprocal';
import { random } from './random';
import { bench } from '../bench';

bench(
  'core',
  'reciprocal',
  (n: number) => [random(n)],
  (x): void => {
    x.reciprocal();
  },
  (x): void => {
    reciprocal(x);
  }
);
