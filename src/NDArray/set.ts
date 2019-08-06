import { NDArray } from './';

NDArray.set = <T extends NDArray>(x: T, ...args: number[]): void => {
  x.set(...args);
};

NDArray.prototype.set = function<T extends NDArray>(this: T, ...args: number[]): void {
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
