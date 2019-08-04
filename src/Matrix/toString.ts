import { Matrix } from './';

/**
 * Converts `x` into a readable formatted string
 */
Matrix.toString = <T extends Matrix>(x: T): string => x.toString();

/**
 * Converts current matrix into a readable formatted string
 */
Matrix.prototype.toString = function<T extends Matrix>(this: T): string {
  const { data: d1 } = this;
  const [r, c] = this.shape;
  const result: string[] = [];

  let i: number;
  for (i = 0; i < r; i += 1) {
    result.push(`[${d1.subarray(i * c, (i + 1) * c)}]`);
  }

  return `[${result.join(', \n')}]`;
};
