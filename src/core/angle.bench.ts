import { angle } from './angle';
import { random } from './random';
import { bench } from '../bench';

bench(
  'NDArray',
  'angle',
  (n: number) => [random(n), random(n)],
  (x, y): void => {
    x.angle(y);
  },
  (x, y): void => {
    angle(x, y);
  }
);
