import { NDArray } from './';
import { NDIter } from '../iterator';

const { log } = Math;

NDArray.log = <T extends NDArray>(x: T | ArrayLike<any>): T => NDArray.array<T>(x).log();

NDArray.prototype.log = function<T extends NDArray>(this: T): T {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  do {
    d1[iter.pos] = log(d1[iter.pos]);

    iter.next();
  } while (!iter.done());

  return this;
};
