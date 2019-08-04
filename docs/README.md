> **[Vectorious](README.md)**

## Index

### Classes

* [Matrix](classes/matrix.md)
* [NDArray](classes/ndarray.md)
* [Vector](classes/vector.md)

### Interfaces

* [INDArray](interfaces/indarray.md)

### Type aliases

* [TypedArray](README.md#typedarray)
* [TypedArrayConstructor](README.md#typedarrayconstructor)

### Functions

* [bench](README.md#const-bench)
* [flatten](README.md#const-flatten)
* [isTypedArray](README.md#const-istypedarray)
* [shape](README.md#const-shape)
* [type](README.md#const-type)

## Type aliases

###  TypedArray

Ƭ **TypedArray**: *`Int8Array` | `Uint8Array` | `Int16Array` | `Uint16Array` | `Int32Array` | `Uint32Array` | `Uint8ClampedArray` | `Float32Array` | `Float64Array`*

*Defined in [types.ts:1](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/types.ts#L1)*

___

###  TypedArrayConstructor

Ƭ **TypedArrayConstructor**: *`Int8ArrayConstructor` | `Uint8ArrayConstructor` | `Int16ArrayConstructor` | `Uint16ArrayConstructor` | `Int32ArrayConstructor` | `Uint32ArrayConstructor` | `Uint8ClampedArrayConstructor` | `Float32ArrayConstructor` | `Float64ArrayConstructor`*

*Defined in [types.ts:12](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/types.ts#L12)*

## Functions

### `Const` bench

▸ **bench**(`group`: string, `name`: string, `setup`: function, ...`funcs`: `Array<function>`): *any*

*Defined in [bench.ts:9](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/bench.ts#L9)*

**Parameters:**

▪ **group**: *string*

▪ **name**: *string*

▪ **setup**: *function*

▸ (`n`: number): *any[]*

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

▪... **funcs**: *`Array<function>`*

**Returns:** *any*

___

### `Const` flatten

▸ **flatten**(`input`: any[]): *number[]*

*Defined in [util.ts:3](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/util.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | any[] |

**Returns:** *number[]*

___

### `Const` isTypedArray

▸ **isTypedArray**(`input`: any): *boolean*

*Defined in [util.ts:27](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/util.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | any |

**Returns:** *boolean*

___

### `Const` shape

▸ **shape**(`input`: any): *number[]*

*Defined in [util.ts:9](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/util.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | any |

**Returns:** *number[]*

___

### `Const` type

▸ **type**(`input`: [TypedArray](README.md#typedarray)): *[TypedArrayConstructor](README.md#typedarrayconstructor)*

*Defined in [util.ts:13](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/util.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [TypedArray](README.md#typedarray) |

**Returns:** *[TypedArrayConstructor](README.md#typedarrayconstructor)*