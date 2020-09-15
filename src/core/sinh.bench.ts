import { sinh } from './sinh';
import { random } from './random';
import { bench } from '../bench';

bench(
  'NDArray',
  'sinh',
  (n: number) => [random(n)],
  (x): void => {
    x.sinh();
  },
  (x): void => {
    sinh(x);
  }
);
