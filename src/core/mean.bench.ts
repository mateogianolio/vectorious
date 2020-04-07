import { mean } from './mean';
import { random } from './random';
import { bench } from '../bench';

bench(
  'v',
  'mean',
  (n: number) => [random(n)],
  (x): void => {
    x.mean();
  },
  (x): void => {
    mean(x);
  }
);
