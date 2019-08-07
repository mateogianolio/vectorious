import { NDArray } from './';

NDArray.array = function<T extends NDArray>(this: new(...args: any[]) => T, ...args: any[]): T {
  return new this(...args);
};
