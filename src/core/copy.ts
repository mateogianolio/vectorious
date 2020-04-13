import { get_type } from '../util';

import { NDArray } from './';
import { array } from './array';

/**
 * @static
 * @function copy
 * @description Makes a copy of `x`
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { copy } from 'vectorious/core/copy';
 * 
 * copy([1, 2, 3]); // => array([1, 2, 3])
 */
export const copy = (x: NDArray | ArrayLike<any>): NDArray => array(x).copy();

/**
 * @function copy
 * @memberof NDArray.prototype
 * @description Makes a copy of the class and underlying data
 * @returns {NDArray}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([1, 2, 3]).copy(); // => array([1, 2, 3])
 * @todo Should make new array C-contiguous in addition to just copying
 */
export default function(this: NDArray): NDArray {
  const copy: NDArray = Object.assign(Object.create(Object.getPrototypeOf(this)), this);

  copy.data = new (get_type(this.dtype))(this.data);
  copy.shape = this.shape;
  copy.strides = this.strides;
  copy.length = this.length;
  copy.dtype = this.dtype;

  return copy;
};
