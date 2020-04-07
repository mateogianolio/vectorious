import { cross } from './cross';
import { random } from './random';
import { bench } from '../bench';

bench(
  'v',
  'cross',
  () => [random(3), random(3)],
  (x, y): void => {
    x.cross(y);
  },
  (x, y): void => {
    cross(x, y);
  }
);
