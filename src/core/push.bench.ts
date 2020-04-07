import { push } from './push';
import { random } from './random';
import { bench } from '../bench';

bench(
  'v',
  'push',
  (n: number) => [random(n), Math.random()],
  (x, value: number): void => {
    x.push(value);
  },
  (x, value: number): void => {
    push(x, value);
  }
);
