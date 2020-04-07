import { dot } from './dot';
import { random } from './random';
import { bench } from '../bench';

bench(
  'v',
  'dot',
  (n: number) => [random(n), random(n)],
  (x, y): void => {
    x.dot(y);
  },
  (x, y): void => {
    dot(x, y);
  }
);
