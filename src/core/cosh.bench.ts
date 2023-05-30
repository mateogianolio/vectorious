import { cosh } from './cosh';
import { random } from './random';
import { bench } from '../bench';

bench(
  'core',
  'cosh',
  (n: number) => [random(n)],
  (x): void => {
    x.cosh();
  },
  (x): void => {
    cosh(x);
  }
);
