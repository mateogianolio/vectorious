import { augment } from './augment';
import { random } from './random';
import { bench } from '../bench';

const { floor, sqrt } = Math;

bench(
  'v',
  'augment',
  (n: number) => [random(floor(sqrt(n)), floor(sqrt(n))), random(floor(sqrt(n)), floor(sqrt(n)))],
  (x, y): void => {
    x.augment(y);
  },
  (x, y): void => {
    augment(x, y);
  }
);
