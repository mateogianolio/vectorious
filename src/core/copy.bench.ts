import { copy } from './copy';
import { random } from './random';
import { bench } from '../bench';

bench(
  'v',
  'copy',
  (n: number) => [random(n)],
  (x): void => {
    x.copy();
  },
  (x): void => {
    copy(x);
  }
);
