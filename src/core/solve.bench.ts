import { solve } from './solve';
import { random } from './random';
import { bench } from '../bench';

const { floor, sqrt } = Math;

bench(
  'core',
  'solve',
  (n: number) => [random(floor(sqrt(n)), floor(sqrt(n))), random(floor(sqrt(n)), 1)],
  (x, y): void => {
    x.solve(y);
  },
  (x, y): void => {
    solve(x, y);
  }
);
