import { equals } from './equals';
import { random } from './random';
import { bench } from '../bench';

bench(
  'core',
  'equals',
  (n: number) => [random(n), random(n)],
  (x, y): void => {
    x.equals(y);
  },
  (x, y): void => {
    equals(x, y);
  }
);
