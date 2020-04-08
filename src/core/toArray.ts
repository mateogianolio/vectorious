import { NDArray, array } from './';
import { NDIter } from '../iterator';

/**
 * @static
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
  const { data: d1, length: l1, shape: s1 } = this;
  const { length: ndim } = s1;
  const out: any = [];

  const iter = new NDIter(this);
  do {
    let node = out;
    for (const i of iter.coords) {
      if (!node[i]) {
        node[i] = [];
      }

      node = node[i];
    }
    
    node.push(d1[iter.pos]);
    iter.next();
  } while (!iter.done())

  console.log(out);

  let i: number;
  let j: number;
  let k: number;
  const res: any = [];

  for (i = 0; i < l1; i += 1) {
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
