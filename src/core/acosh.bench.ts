import { acosh } from './acosh';
import { random } from './random';
import { bench } from '../bench';

bench(
  'core',
  'acosh',
  (n: number) => [random(n)],
  (x): void => {
    x.acosh();
  },
  (x): void => {
    acosh(x);
  }
);
