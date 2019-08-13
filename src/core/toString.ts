import { inspect } from 'util';

import { inspectSymbol, NDArray } from './';

NDArray.toString = <T extends NDArray>(x: T | ArrayLike<any>): string => x.toString();

NDArray.prototype.toString = function<T extends NDArray>(this: T): string {
  return `array(${inspect(this.toArray(), { depth: 10, breakLength: 40 })}, dtype=${this.dtype})`;
};

NDArray.prototype[inspectSymbol] = NDArray.prototype.toString;
