import { NDArray } from './';

NDArray.toString = <T extends NDArray>(x: T): string => x.toString();

NDArray.prototype.toString = function<T extends NDArray>(this: T): string {
  const { data: d1, length: l1 } = this;
  const result: string[] = ['['];

  let i: number = 0;
  if (i < l1) {
    result.push(`${d1[i]}`);
    i += 1;
  }

  while (i < l1) {
    result.push(`, ${d1[i]}`);
    i += 1;
  }

  result.push(']');

  return result.join('');
};
