import { add } from './add';
import { random } from './random';
import { bench } from '../bench';

bench(
  'core',
  'add',
  (n: number) => [random(n), random(n)],
  (x, y): void => {
    x.add(y);
  },
  (x, y): void => {
    add(x, y);
  }
);
