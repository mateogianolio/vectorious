import { asinh } from './asinh';
import { random } from './random';
import { bench } from '../bench';

bench(
  'core',
  'asinh',
  (n: number) => [random(n)],
  (x): void => {
    x.asinh();
  },
  (x): void => {
    asinh(x);
  }
);
