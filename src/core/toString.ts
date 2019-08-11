import { inspect } from 'util';

import { NDArray } from './';

NDArray.toString = <T extends NDArray>(x: T): string => x.toString();

NDArray.prototype.toString = function<T extends NDArray>(this: T): string {
  return `array(${inspect(this.toArray(), { depth: 10, breakLength: 40 })}, dtype=${this.dtype})`;
};
