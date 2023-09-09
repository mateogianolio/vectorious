import { NDArray } from './';

/**
 * @static
 * @memberof vectorious
 * @function array
 * @description :code:`array(...args)` is an alias for :class:`new NDArray(...args) <NDArray>`.
 * @param {} ...args
 * @returns {NDArray}
 * @example
 * import { array } from 'vectorious/core/array';
 *
 * array([1, 2, 3]); // => array([1, 2, 3])
 */
export const array = (...args: any[]): NDArray => new NDArray(...args);
