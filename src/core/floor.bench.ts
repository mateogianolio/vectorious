import { floor } from './floor';
import { random } from './random';
import { bench } from '../bench';

bench(
  'NDArray',
  'floor',
  (n: number) => [random(n)],
  (x): void => {
    x.floor();
  },
  (x): void => {
    floor(x);
  }
);
