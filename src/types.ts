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

export interface INDArray {
  data: TypedArray;
  length: number;
  shape: number[];
  type: TypedArrayConstructor;
}

export interface IVector extends INDArray {
  dot(x: IVector): number;
  magnitude(): number;
  scale(scalar: number): IVector;
}

export interface IMatrix extends INDArray {
  augment(x: IMatrix): IMatrix;
  check(r: number, c: number): void;
  copy(): IMatrix;
  det(): number;
  determinant(): number;
  diag(): IMatrix;
  diagonal(): IMatrix;
  eye(size: number): IMatrix;
  gauss(): IMatrix;
  inv(): IMatrix;
  inverse(): IMatrix;
  lu(): [IMatrix, IMatrix, Int32Array];
  mul(x: IMatrix): IMatrix;
  multiply(x: IMatrix): IMatrix;
  plu(): [IMatrix, Int32Array];
  rank(): number;
  rk(): number;
  rowAdd(dest: number, source: number, scalar?: number): IMatrix;
  solve(x: IMatrix): IMatrix;
  square(): void;
  swap(i: number, j: number): IMatrix;
  toArray(): number[][];
  toString(): string;
  trace(): number;
  transpose(): IMatrix;
}
