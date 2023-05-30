import { row_add } from './row_add';
import { random } from './random';
import { bench } from '../bench';

bench(
  'core',
  'row_add',
  (n: number) => [
    random(n),
    Math.floor(Math.random() * Math.floor(Math.sqrt(n))),
    Math.floor(Math.random() * Math.floor(Math.sqrt(n))),
  ],
  (x, dest: number, source: number): void => {
    x.row_add(dest, source);
  },
  (x, dest: number, source: number): void => {
    row_add(x, dest, source);
  }
);
