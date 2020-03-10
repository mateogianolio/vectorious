import { NDArray } from './';

NDArray.abs = <T extends NDArray>(x: T | ArrayLike<any>): T => NDArray.array<T>(x).abs();

const f = (a?: any, b?: any): any => [].concat(...a.map((d: any) => b.map((e: any) => [].concat(d, e))));
const cartesian = (a?: any, b?: any, ...c: any): any => (b ? cartesian(f(a, b), ...c) : a);

NDArray.prototype.abs = function<T extends NDArray>(this: T): T {
  const { data: d1, shape: s1, strides: st1 } = this;

  const indices = cartesian(
    ...s1
      .map(s => Array.from(new Array(s), (_, i) => i))
  );

  console.log(st1);
  console.log(indices);
  
  let i;
  let j;
  for (i = 0; i < indices.length; i += 1) {
    let pos = 0;
    if (indices[i].length) {
      for (j = 0; j < indices[i].length; j += 1) {
        pos += indices[i][j] * st1[j];
      }
    } else {
      pos += indices[i];
    }

    console.log(pos);
    d1[pos] = Math.abs(d1[pos]);
  }

  return this;
};
