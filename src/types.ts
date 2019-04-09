export type TypedArray =
    | Int8Array
    | Uint8Array
    | Int16Array
    | Uint16Array
    | Int32Array
    | Uint32Array
    | Uint8ClampedArray
    | Float32Array
    | Float64Array;

export type TypedArrayConstructor =
    | Int8ArrayConstructor
    | Uint8ArrayConstructor
    | Int16ArrayConstructor
    | Uint16ArrayConstructor
    | Int32ArrayConstructor
    | Uint32ArrayConstructor
    | Uint8ClampedArrayConstructor
    | Float32ArrayConstructor
    | Float64ArrayConstructor;

export interface INDArray<T> {
  data: TypedArray;
  length: number;
  shape: number[];
  type: TypedArrayConstructor;

  abs(): T;
  acos(): T;
  acosh(): T;
  add(x: T, alpha?: number): T;
  asin(): T;
  asinh(): T;
  atan(): T;
  atanh(): T;
  cbrt(): T;
  ceil(): T;
  copy(): T;
  cos(): T;
  cosh(): T;
  dot(x: T): number;
  equals(x: T): boolean;
  equilateral(x: T): void;
  equidimensional(x: T): void;
  exp(): T;
  expm1(): T;
  fill(value?: number | ((index: number) => number)): T;
  floor(): T;
  fround(): T;
  log(): T;
  log1p(): T;
  log2(): T;
  log10(): T;
  magnitude(): number;
  max(): number;
  min(): number;
  pow(exponent: number): T;
  product(x: T): T;
  reshape(shape: number[]): T;
  round(): T;
  scale(scalar: number): T;
  sign(): T;
  sin(): T;
  sinh(): T;
  sqrt(): T;
  subtract(x: T): T;
  tan(): T;
  tanh(): T;
  trunc(): T;
}

export interface IVector extends INDArray<IVector> {
  angle(x: IVector): number;
  binOp(
    x: IVector,
    op: (
      a: number,
      b: number,
      index?: number
    ) => number
  ): IVector;
}

export interface IMatrix extends INDArray<IMatrix> {
  
}