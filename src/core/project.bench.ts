import { project } from './project';
import { random } from './random';
import { bench } from '../bench';

bench(
  'v',
  'project',
  (n: number) => [random(n), random(n)],
  (x, y): void => {
    x.project(y);
  },
  (x, y): void => {
    project(x, y);
  }
);
