import { NDIter } from '../iterator';
import { NDArray } from './';
import { array } from './array';

/**
 * @static
 * @memberof module:Globals
 * @function toArray
 * @description Converts `x` into a JavaScript array.
 * @param {NDArray} x
 * @returns {Array}
 * @example
 * import { toArray } from 'vectorious/core/toArray';
 * 
 * toArray([1, 2, 3]); // => [1, 2, 3]
 */
export const toArray = (x: NDArray | ArrayLike<any>): number[] => array(x).toArray();

/**
 * @function toArray
 * @memberof NDArray.prototype
 * @description Converts current vector into a JavaScript array.
 * @returns {Array}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([1, 2, 3]).toArray(); // => [1, 2, 3]
 */
export default function(this: NDArray): number[] {
  const { shape: s1 } = this;
  const { length: ndim } = s1;
  const iter = new NDIter(this);

  let res: any = [];
  let j: number;
  let k: number;

  for (const i of iter) {
    const indices: number[] = [];
    for (j = 0; j < ndim; j += 1) {
      let p: number = 1;
      for (k = j + 1; k < ndim; k += 1) {
        p *= s1[k];
      }

      let index: number = Math.floor(i / p);
      if (j > 0) {
        index %= s1[j];
      }

      indices.push(index);
    }

    let node: any = res;
    for (j = 0; j < ndim; j += 1) {
      const index: number = indices[j];
      if (j < ndim - 1) {
        if (!node[index]) {
          node[index] = [];
        }
        node = node[index];
      } else {
        node[index] = this.get(...indices);
      }
    }
  }

  return res;
};
