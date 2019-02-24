type TypedArray = 
    | Int8Array
    | Uint8Array
    | Int16Array
    | Uint16Array
    | Int32Array
    | Uint32Array
    | Uint8ClampedArray
    | Float32Array
    | Float64Array;

type TypedArrayConstructor = 
    | Int8ArrayConstructor
    | Uint8ArrayConstructor
    | Int16ArrayConstructor
    | Uint16ArrayConstructor
    | Int32ArrayConstructor
    | Uint32ArrayConstructor
    | Uint8ClampedArrayConstructor
    | Float32ArrayConstructor
    | Float64ArrayConstructor;

interface NDInterface {
  type: TypedArrayConstructor;
  shape: number[];
  length: number;
  data: TypedArray;
}
