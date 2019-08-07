import { NDArray } from './';

NDArray.toArray = <T extends NDArray>(x: T): number[] => x.toArray();

NDArray.prototype.toArray = function<T extends NDArray>(this: T): number[] {
  return [].slice.call(this.data);
};
