import { NDArray } from './';
import { NDIter } from '../iterator';

NDArray.prod = <T extends NDArray>(x: T | ArrayLike<any>): number => NDArray.array<T>(x).prod();

NDArray.prototype.prod = function<T extends NDArray>(this: T): number {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  let prod: number = 1;
  do {
    prod *= d1[iter.pos];

    iter.next();
  } while (!iter.done());

  return prod;
};
