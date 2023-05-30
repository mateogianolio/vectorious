import { fill } from './fill';
import { random } from './random';
import { bench } from '../bench';

bench(
  'core',
  'fill',
  (n: number) => [random(n), Math.random()],
  (x, value: number) => {
    x.fill(value);
  },
  (x, value: number) => {
    fill(x, value);
  }
);
