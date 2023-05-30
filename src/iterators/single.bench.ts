import { NDIter } from './single';
import { random } from '../core/random';
import { bench } from '../bench';

bench(
  'iterators',
  'single',
  (n: number) => [random(n)],
  (x): void => {
    const iter = new NDIter(x);
    for (const i of iter) {
      x.data[i];
    }
  },
  (x): void => {
    for (let i = 0; i < x.length; i++) {
      x.data[i];
    }
  }
);
