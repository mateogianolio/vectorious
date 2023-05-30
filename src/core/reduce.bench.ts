import { reduce } from './reduce';
import { random } from './random';
import { bench } from '../bench';

bench(
  'core',
  'reduce',
  (n: number) => [random(n)],
  (x): void => {
    x.reduce((value: number) => value);
  },
  (x): void => {
    reduce(x, (value: number) => value);
  }
);
