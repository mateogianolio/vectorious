import { log } from './log';
import { random } from './random';
import { bench } from '../bench';

bench(
  'core',
  'log',
  (n: number) => [random(n)],
  (x): void => {
    x.log();
  },
  (x): void => {
    log(x);
  }
);
