import { eig } from './eig';
import { random } from './random';
import { bench } from '../bench';

const { floor, sqrt } = Math;

bench(
  'core',
  'eig',
  (n: number) => [random(floor(sqrt(n)), floor(sqrt(n)))],
  (x): void => {
    x.eig();
  },
  (x): void => {
    eig(x);
  }
);
