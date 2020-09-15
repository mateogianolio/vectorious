import { NDArray } from './';

/**
 * @static
 * @memberof module:Globals
 * @function set
 * @description Sets the element at `i, j, ..., n` to `value`.
 * @param {NDArray} x
 * @param {Number[]} ...indices
 * @param {Number} value
 * @returns {NDArray}
 * @example
 * import { set } from 'vectorious/core/set';
 * 
 * set([1, 2, 3], 1, 0); // => array([1, 0, 3])
 */
export const set = (x: NDArray, ...args: number[]): void => {
  x.set(...args);
};

/**
 * @function set
 * @memberof NDArray.prototype
 * @description Sets the element at `i, j, ..., n` to `value`.
 * @param {Number[]} ...indices
 * @param {Number} value
 * @returns {this}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([1, 2, 3]).set(1, 0); // <=> array([1, 0, 3])
 */
export default function(this: NDArray, ...args: number[]): void {
  const indices: number[] = args.slice(0, -1);
  const value: number = args[args.length - 1];

  this.check(...indices);

  const { shape: s1 } = this;
  let index: number = indices[indices.length - 1];

  let i: number;
  for (i = 0; i < indices.length - 1; i += 1) {
    index += indices[i] * s1[i + 1];
  }

  this.data[index] = value;
};
