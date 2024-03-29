import { tanh } from './tanh';
import { random } from './random';
import { bench } from '../bench';

bench(
  'core',
  'tanh',
  (n: number) => [random(n)],
  (x): void => {
    x.tanh();
  },
  (x): void => {
    tanh(x);
  }
);
