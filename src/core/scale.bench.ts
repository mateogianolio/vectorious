import { scale } from './scale';
import { random } from './random';
import { bench } from '../bench';

bench(
  'core',
  'scale',
  (n: number) => [random(n), Math.random()],
  (x, alpha: number) => {
    x.scale(alpha);
  },
  (x, alpha: number) => {
    scale(x, alpha);
  }
);
