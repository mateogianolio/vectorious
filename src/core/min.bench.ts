import { min } from './min';
import { random } from './random';
import { bench } from '../bench';

bench(
  'core',
  'min',
  (n: number) => [random(n)],
  (x): void => {
    x.min();
  },
  (x): void => {
    min(x);
  }
);
