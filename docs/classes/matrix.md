> **[Vectorious](../README.md)**

[Matrix](matrix.md) /

# Class: Matrix

## Hierarchy

* [NDArray](ndarray.md)

  * **Matrix**

## Implements

* [INDArray](../interfaces/indarray.md)

## Index

### Constructors

* [constructor](matrix.md#constructor)

### Properties

* [abs](matrix.md#abs)
* [acos](matrix.md#acos)
* [acosh](matrix.md#acosh)
* [add](matrix.md#add)
* [asin](matrix.md#asin)
* [asinh](matrix.md#asinh)
* [atan](matrix.md#atan)
* [atanh](matrix.md#atanh)
* [augment](matrix.md#augment)
* [binOp](matrix.md#binop)
* [cbrt](matrix.md#cbrt)
* [ceil](matrix.md#ceil)
* [check](matrix.md#check)
* [copy](matrix.md#copy)
* [cos](matrix.md#cos)
* [cosh](matrix.md#cosh)
* [data](matrix.md#data)
* [determinant](matrix.md#determinant)
* [diagonal](matrix.md#diagonal)
* [dot](matrix.md#dot)
* [each](matrix.md#each)
* [equals](matrix.md#equals)
* [equidimensional](matrix.md#equidimensional)
* [equilateral](matrix.md#equilateral)
* [exp](matrix.md#exp)
* [expm1](matrix.md#expm1)
* [eye](matrix.md#eye)
* [fill](matrix.md#fill)
* [floor](matrix.md#floor)
* [fround](matrix.md#fround)
* [gauss](matrix.md#gauss)
* [get](matrix.md#get)
* [inverse](matrix.md#inverse)
* [length](matrix.md#length)
* [log](matrix.md#log)
* [log10](matrix.md#log10)
* [log1p](matrix.md#log1p)
* [log2](matrix.md#log2)
* [lu](matrix.md#lu)
* [magnitude](matrix.md#magnitude)
* [map](matrix.md#map)
* [max](matrix.md#max)
* [min](matrix.md#min)
* [multiply](matrix.md#multiply)
* [plu](matrix.md#plu)
* [pow](matrix.md#pow)
* [product](matrix.md#product)
* [rank](matrix.md#rank)
* [reduce](matrix.md#reduce)
* [reshape](matrix.md#reshape)
* [round](matrix.md#round)
* [rowAdd](matrix.md#rowadd)
* [scale](matrix.md#scale)
* [set](matrix.md#set)
* [shape](matrix.md#shape)
* [sign](matrix.md#sign)
* [sin](matrix.md#sin)
* [sinh](matrix.md#sinh)
* [slice](matrix.md#slice)
* [solve](matrix.md#solve)
* [sqrt](matrix.md#sqrt)
* [square](matrix.md#square)
* [subtract](matrix.md#subtract)
* [swap](matrix.md#swap)
* [tan](matrix.md#tan)
* [tanh](matrix.md#tanh)
* [toArray](matrix.md#toarray)
* [toString](matrix.md#tostring)
* [trace](matrix.md#trace)
* [transpose](matrix.md#transpose)
* [trunc](matrix.md#trunc)
* [type](matrix.md#type)
* [abs](matrix.md#static-abs)
* [acos](matrix.md#static-acos)
* [acosh](matrix.md#static-acosh)
* [add](matrix.md#static-add)
* [asin](matrix.md#static-asin)
* [asinh](matrix.md#static-asinh)
* [atan](matrix.md#static-atan)
* [atanh](matrix.md#static-atanh)
* [augment](matrix.md#static-augment)
* [binOp](matrix.md#static-binop)
* [cbrt](matrix.md#static-cbrt)
* [ceil](matrix.md#static-ceil)
* [check](matrix.md#static-check)
* [copy](matrix.md#static-copy)
* [cos](matrix.md#static-cos)
* [cosh](matrix.md#static-cosh)
* [determinant](matrix.md#static-determinant)
* [diagonal](matrix.md#static-diagonal)
* [dot](matrix.md#static-dot)
* [each](matrix.md#static-each)
* [equals](matrix.md#static-equals)
* [equidimensional](matrix.md#static-equidimensional)
* [equilateral](matrix.md#static-equilateral)
* [exp](matrix.md#static-exp)
* [expm1](matrix.md#static-expm1)
* [eye](matrix.md#static-eye)
* [fill](matrix.md#static-fill)
* [floor](matrix.md#static-floor)
* [fround](matrix.md#static-fround)
* [gauss](matrix.md#static-gauss)
* [get](matrix.md#static-get)
* [identity](matrix.md#static-identity)
* [inverse](matrix.md#static-inverse)
* [log](matrix.md#static-log)
* [log10](matrix.md#static-log10)
* [log1p](matrix.md#static-log1p)
* [log2](matrix.md#static-log2)
* [lu](matrix.md#static-lu)
* [magic](matrix.md#static-magic)
* [magnitude](matrix.md#static-magnitude)
* [map](matrix.md#static-map)
* [max](matrix.md#static-max)
* [min](matrix.md#static-min)
* [multiply](matrix.md#static-multiply)
* [ones](matrix.md#static-ones)
* [plu](matrix.md#static-plu)
* [pow](matrix.md#static-pow)
* [product](matrix.md#static-product)
* [random](matrix.md#static-random)
* [range](matrix.md#static-range)
* [rank](matrix.md#static-rank)
* [reduce](matrix.md#static-reduce)
* [reshape](matrix.md#static-reshape)
* [round](matrix.md#static-round)
* [rowAdd](matrix.md#static-rowadd)
* [scale](matrix.md#static-scale)
* [set](matrix.md#static-set)
* [sign](matrix.md#static-sign)
* [sin](matrix.md#static-sin)
* [sinh](matrix.md#static-sinh)
* [slice](matrix.md#static-slice)
* [solve](matrix.md#static-solve)
* [sqrt](matrix.md#static-sqrt)
* [square](matrix.md#static-square)
* [subtract](matrix.md#static-subtract)
* [swap](matrix.md#static-swap)
* [tan](matrix.md#static-tan)
* [tanh](matrix.md#static-tanh)
* [toArray](matrix.md#static-toarray)
* [toString](matrix.md#static-tostring)
* [trace](matrix.md#static-trace)
* [transpose](matrix.md#static-transpose)
* [trunc](matrix.md#static-trunc)
* [zeros](matrix.md#static-zeros)

### Accessors

* [T](matrix.md#t)

## Constructors

###  constructor

\+ **new Matrix**(`data?`: any, `options?`: any): *[Matrix](matrix.md)*

*Overrides [NDArray](ndarray.md).[constructor](ndarray.md#constructor)*

*Defined in [Matrix/index.ts:41](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Matrix/index.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`data?` | any |
`options?` | any |

**Returns:** *[Matrix](matrix.md)*

## Properties

###  abs

• **abs**: *function*

*Inherited from [NDArray](ndarray.md).[abs](ndarray.md#abs)*

*Defined in [NDArray/index.ts:74](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L74)*

#### Type declaration:

▸ (): *this*

___

###  acos

• **acos**: *function*

*Inherited from [NDArray](ndarray.md).[acos](ndarray.md#acos)*

*Defined in [NDArray/index.ts:75](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L75)*

#### Type declaration:

▸ (): *this*

___

###  acosh

• **acosh**: *function*

*Inherited from [NDArray](ndarray.md).[acosh](ndarray.md#acosh)*

*Defined in [NDArray/index.ts:76](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L76)*

#### Type declaration:

▸ (): *this*

___

###  add

• **add**: *function*

*Inherited from [NDArray](ndarray.md).[add](ndarray.md#add)*

*Defined in [NDArray/index.ts:77](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L77)*

#### Type declaration:

▸ (`y`: [NDArray](ndarray.md), `alpha?`: number): *this*

**Parameters:**

Name | Type |
------ | ------ |
`y` | [NDArray](ndarray.md) |
`alpha?` | number |

___

###  asin

• **asin**: *function*

*Inherited from [NDArray](ndarray.md).[asin](ndarray.md#asin)*

*Defined in [NDArray/index.ts:78](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L78)*

#### Type declaration:

▸ (): *this*

___

###  asinh

• **asinh**: *function*

*Inherited from [NDArray](ndarray.md).[asinh](ndarray.md#asinh)*

*Defined in [NDArray/index.ts:79](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L79)*

#### Type declaration:

▸ (): *this*

___

###  atan

• **atan**: *function*

*Inherited from [NDArray](ndarray.md).[atan](ndarray.md#atan)*

*Defined in [NDArray/index.ts:80](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L80)*

#### Type declaration:

▸ (): *this*

___

###  atanh

• **atanh**: *function*

*Inherited from [NDArray](ndarray.md).[atanh](ndarray.md#atanh)*

*Defined in [NDArray/index.ts:81](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L81)*

#### Type declaration:

▸ (): *this*

___

###  augment

• **augment**: *function*

*Defined in [Matrix/index.ts:25](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Matrix/index.ts#L25)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *this*

**Type parameters:**

▪ **T**: *[Matrix](matrix.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

###  binOp

• **binOp**: *function*

*Inherited from [NDArray](ndarray.md).[binOp](ndarray.md#binop)*

*Defined in [NDArray/index.ts:82](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L82)*

#### Type declaration:

▸ (`y`: [NDArray](ndarray.md), `f`: function): *this*

**Parameters:**

▪ **y**: *[NDArray](ndarray.md)*

▪ **f**: *function*

▸ (`a`: number, `b`: number, `index`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`a` | number |
`b` | number |
`index` | number |

___

###  cbrt

• **cbrt**: *function*

*Inherited from [NDArray](ndarray.md).[cbrt](ndarray.md#cbrt)*

*Defined in [NDArray/index.ts:83](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L83)*

#### Type declaration:

▸ (): *this*

___

###  ceil

• **ceil**: *function*

*Inherited from [NDArray](ndarray.md).[ceil](ndarray.md#ceil)*

*Defined in [NDArray/index.ts:84](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L84)*

#### Type declaration:

▸ (): *this*

___

###  check

• **check**: *function*

*Inherited from [NDArray](ndarray.md).[check](ndarray.md#check)*

*Defined in [NDArray/index.ts:85](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L85)*

#### Type declaration:

▸ (...`indices`: number[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...indices` | number[] |

___

###  copy

• **copy**: *function*

*Inherited from [NDArray](ndarray.md).[copy](ndarray.md#copy)*

*Defined in [NDArray/index.ts:86](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L86)*

#### Type declaration:

▸ (): *this*

___

###  cos

• **cos**: *function*

*Inherited from [NDArray](ndarray.md).[cos](ndarray.md#cos)*

*Defined in [NDArray/index.ts:87](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L87)*

#### Type declaration:

▸ (): *this*

___

###  cosh

• **cosh**: *function*

*Inherited from [NDArray](ndarray.md).[cosh](ndarray.md#cosh)*

*Defined in [NDArray/index.ts:88](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L88)*

#### Type declaration:

▸ (): *this*

___

###  data

• **data**: *[TypedArray](../README.md#typedarray)* =  new Float32Array(0)

*Implementation of [INDArray](../interfaces/indarray.md).[data](../interfaces/indarray.md#data)*

*Inherited from [NDArray](ndarray.md).[data](ndarray.md#data)*

*Defined in [NDArray/index.ts:89](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L89)*

___

###  determinant

• **determinant**: *function*

*Defined in [Matrix/index.ts:26](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Matrix/index.ts#L26)*

#### Type declaration:

▸ (): *number*

___

###  diagonal

• **diagonal**: *function*

*Defined in [Matrix/index.ts:27](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Matrix/index.ts#L27)*

#### Type declaration:

▸ (): *this*

___

###  dot

• **dot**: *function*

*Inherited from [NDArray](ndarray.md).[dot](ndarray.md#dot)*

*Defined in [NDArray/index.ts:90](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L90)*

#### Type declaration:

▸ (`y`: [NDArray](ndarray.md)): *number*

**Parameters:**

Name | Type |
------ | ------ |
`y` | [NDArray](ndarray.md) |

___

###  each

• **each**: *function*

*Inherited from [NDArray](ndarray.md).[each](ndarray.md#each)*

*Defined in [NDArray/index.ts:91](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L91)*

#### Type declaration:

▸ (`f`: function): *this*

**Parameters:**

▪ **f**: *function*

▸ (`value`: number, `i`: number, `src`: [TypedArray](../README.md#typedarray)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`i` | number |
`src` | [TypedArray](../README.md#typedarray) |

___

###  equals

• **equals**: *function*

*Inherited from [NDArray](ndarray.md).[equals](ndarray.md#equals)*

*Defined in [NDArray/index.ts:92](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L92)*

#### Type declaration:

▸ (`y`: [NDArray](ndarray.md)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`y` | [NDArray](ndarray.md) |

___

###  equidimensional

• **equidimensional**: *function*

*Inherited from [NDArray](ndarray.md).[equidimensional](ndarray.md#equidimensional)*

*Defined in [NDArray/index.ts:93](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L93)*

#### Type declaration:

▸ (`y`: [NDArray](ndarray.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`y` | [NDArray](ndarray.md) |

___

###  equilateral

• **equilateral**: *function*

*Inherited from [NDArray](ndarray.md).[equilateral](ndarray.md#equilateral)*

*Defined in [NDArray/index.ts:94](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L94)*

#### Type declaration:

▸ (`y`: [NDArray](ndarray.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`y` | [NDArray](ndarray.md) |

___

###  exp

• **exp**: *function*

*Inherited from [NDArray](ndarray.md).[exp](ndarray.md#exp)*

*Defined in [NDArray/index.ts:95](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L95)*

#### Type declaration:

▸ (): *this*

___

###  expm1

• **expm1**: *function*

*Inherited from [NDArray](ndarray.md).[expm1](ndarray.md#expm1)*

*Defined in [NDArray/index.ts:96](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L96)*

#### Type declaration:

▸ (): *this*

___

###  eye

• **eye**: *function*

*Inherited from [NDArray](ndarray.md).[eye](ndarray.md#eye)*

*Defined in [NDArray/index.ts:97](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L97)*

#### Type declaration:

▸ (`n`: number): *this*

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

___

###  fill

• **fill**: *function*

*Inherited from [NDArray](ndarray.md).[fill](ndarray.md#fill)*

*Defined in [NDArray/index.ts:98](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L98)*

#### Type declaration:

▸ (`value`: number | function): *this*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number \| function |

___

###  floor

• **floor**: *function*

*Inherited from [NDArray](ndarray.md).[floor](ndarray.md#floor)*

*Defined in [NDArray/index.ts:99](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L99)*

#### Type declaration:

▸ (): *this*

___

###  fround

• **fround**: *function*

*Inherited from [NDArray](ndarray.md).[fround](ndarray.md#fround)*

*Defined in [NDArray/index.ts:100](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L100)*

#### Type declaration:

▸ (): *this*

___

###  gauss

• **gauss**: *function*

*Defined in [Matrix/index.ts:28](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Matrix/index.ts#L28)*

#### Type declaration:

▸ (): *this*

___

###  get

• **get**: *function*

*Inherited from [NDArray](ndarray.md).[get](ndarray.md#get)*

*Defined in [NDArray/index.ts:101](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L101)*

#### Type declaration:

▸ (...`indices`: number[]): *number*

**Parameters:**

Name | Type |
------ | ------ |
`...indices` | number[] |

___

###  inverse

• **inverse**: *function*

*Defined in [Matrix/index.ts:29](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Matrix/index.ts#L29)*

#### Type declaration:

▸ (): *this*

___

###  length

• **length**: *number* = 0

*Implementation of [INDArray](../interfaces/indarray.md).[length](../interfaces/indarray.md#length)*

*Inherited from [NDArray](ndarray.md).[length](ndarray.md#length)*

*Defined in [NDArray/index.ts:102](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L102)*

___

###  log

• **log**: *function*

*Inherited from [NDArray](ndarray.md).[log](ndarray.md#log)*

*Defined in [NDArray/index.ts:103](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L103)*

#### Type declaration:

▸ (): *this*

___

###  log10

• **log10**: *function*

*Inherited from [NDArray](ndarray.md).[log10](ndarray.md#log10)*

*Defined in [NDArray/index.ts:104](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L104)*

#### Type declaration:

▸ (): *this*

___

###  log1p

• **log1p**: *function*

*Inherited from [NDArray](ndarray.md).[log1p](ndarray.md#log1p)*

*Defined in [NDArray/index.ts:105](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L105)*

#### Type declaration:

▸ (): *this*

___

###  log2

• **log2**: *function*

*Inherited from [NDArray](ndarray.md).[log2](ndarray.md#log2)*

*Defined in [NDArray/index.ts:106](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L106)*

#### Type declaration:

▸ (): *this*

___

###  lu

• **lu**: *function*

*Defined in [Matrix/index.ts:30](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Matrix/index.ts#L30)*

#### Type declaration:

▸ <**T**>(): *[`T`, `T`, `Int32Array`]*

**Type parameters:**

▪ **T**: *[Matrix](matrix.md)*

___

###  magnitude

• **magnitude**: *function*

*Inherited from [NDArray](ndarray.md).[magnitude](ndarray.md#magnitude)*

*Defined in [NDArray/index.ts:107](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L107)*

#### Type declaration:

▸ (): *number*

___

###  map

• **map**: *function*

*Inherited from [NDArray](ndarray.md).[map](ndarray.md#map)*

*Defined in [NDArray/index.ts:108](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L108)*

#### Type declaration:

▸ (`f`: function): *this*

**Parameters:**

▪ **f**: *function*

▸ (`value`: number, `i`: number, `src`: [TypedArray](../README.md#typedarray)): *number*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`i` | number |
`src` | [TypedArray](../README.md#typedarray) |

___

###  max

• **max**: *function*

*Inherited from [NDArray](ndarray.md).[max](ndarray.md#max)*

*Defined in [NDArray/index.ts:109](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L109)*

#### Type declaration:

▸ (): *number*

___

###  min

• **min**: *function*

*Inherited from [NDArray](ndarray.md).[min](ndarray.md#min)*

*Defined in [NDArray/index.ts:110](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L110)*

#### Type declaration:

▸ (): *number*

___

###  multiply

• **multiply**: *function*

*Defined in [Matrix/index.ts:31](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Matrix/index.ts#L31)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *this*

**Type parameters:**

▪ **T**: *[Matrix](matrix.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

###  plu

• **plu**: *function*

*Defined in [Matrix/index.ts:32](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Matrix/index.ts#L32)*

#### Type declaration:

▸ (): *[this, `Int32Array`]*

___

###  pow

• **pow**: *function*

*Inherited from [NDArray](ndarray.md).[pow](ndarray.md#pow)*

*Defined in [NDArray/index.ts:111](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L111)*

#### Type declaration:

▸ (`exponent`: number): *this*

**Parameters:**

Name | Type |
------ | ------ |
`exponent` | number |

___

###  product

• **product**: *function*

*Inherited from [NDArray](ndarray.md).[product](ndarray.md#product)*

*Defined in [NDArray/index.ts:112](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L112)*

#### Type declaration:

▸ (`y`: [NDArray](ndarray.md)): *this*

**Parameters:**

Name | Type |
------ | ------ |
`y` | [NDArray](ndarray.md) |

___

###  rank

• **rank**: *function*

*Defined in [Matrix/index.ts:33](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Matrix/index.ts#L33)*

#### Type declaration:

▸ (): *number*

___

###  reduce

• **reduce**: *function*

*Inherited from [NDArray](ndarray.md).[reduce](ndarray.md#reduce)*

*Defined in [NDArray/index.ts:113](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L113)*

#### Type declaration:

▸ (`f`: function, `initialValue?`: number): *number*

**Parameters:**

▪ **f**: *function*

▸ (`acc`: number, `value`: number, `i`: number, `src`: [TypedArray](../README.md#typedarray)): *number*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | number |
`value` | number |
`i` | number |
`src` | [TypedArray](../README.md#typedarray) |

▪`Optional`  **initialValue**: *number*

___

###  reshape

• **reshape**: *function*

*Inherited from [NDArray](ndarray.md).[reshape](ndarray.md#reshape)*

*Defined in [NDArray/index.ts:117](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L117)*

#### Type declaration:

▸ (`s`: number[]): *this*

**Parameters:**

Name | Type |
------ | ------ |
`s` | number[] |

___

###  round

• **round**: *function*

*Inherited from [NDArray](ndarray.md).[round](ndarray.md#round)*

*Defined in [NDArray/index.ts:118](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L118)*

#### Type declaration:

▸ (): *this*

___

###  rowAdd

• **rowAdd**: *function*

*Defined in [Matrix/index.ts:34](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Matrix/index.ts#L34)*

#### Type declaration:

▸ (`dest`: number, `source`: number, `scalar?`: number): *this*

**Parameters:**

Name | Type |
------ | ------ |
`dest` | number |
`source` | number |
`scalar?` | number |

___

###  scale

• **scale**: *function*

*Inherited from [NDArray](ndarray.md).[scale](ndarray.md#scale)*

*Defined in [NDArray/index.ts:119](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L119)*

#### Type declaration:

▸ (`scalar`: number): *this*

**Parameters:**

Name | Type |
------ | ------ |
`scalar` | number |

___

###  set

• **set**: *function*

*Inherited from [NDArray](ndarray.md).[set](ndarray.md#set)*

*Defined in [NDArray/index.ts:120](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L120)*

#### Type declaration:

▸ (...`args`: number[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | number[] |

___

###  shape

• **shape**: *number[]* =  [0]

*Implementation of [INDArray](../interfaces/indarray.md).[shape](../interfaces/indarray.md#shape)*

*Inherited from [NDArray](ndarray.md).[shape](ndarray.md#shape)*

*Defined in [NDArray/index.ts:121](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L121)*

___

###  sign

• **sign**: *function*

*Inherited from [NDArray](ndarray.md).[sign](ndarray.md#sign)*

*Defined in [NDArray/index.ts:122](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L122)*

#### Type declaration:

▸ (): *this*

___

###  sin

• **sin**: *function*

*Inherited from [NDArray](ndarray.md).[sin](ndarray.md#sin)*

*Defined in [NDArray/index.ts:123](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L123)*

#### Type declaration:

▸ (): *this*

___

###  sinh

• **sinh**: *function*

*Inherited from [NDArray](ndarray.md).[sinh](ndarray.md#sinh)*

*Defined in [NDArray/index.ts:124](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L124)*

#### Type declaration:

▸ (): *this*

___

###  slice

• **slice**: *function*

*Inherited from [NDArray](ndarray.md).[slice](ndarray.md#slice)*

*Defined in [NDArray/index.ts:125](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L125)*

#### Type declaration:

▸ (`start?`: number, `step?`: number, `end?`: number): *this*

**Parameters:**

Name | Type |
------ | ------ |
`start?` | number |
`step?` | number |
`end?` | number |

___

###  solve

• **solve**: *function*

*Defined in [Matrix/index.ts:35](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Matrix/index.ts#L35)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *this*

**Type parameters:**

▪ **T**: *[Matrix](matrix.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

###  sqrt

• **sqrt**: *function*

*Inherited from [NDArray](ndarray.md).[sqrt](ndarray.md#sqrt)*

*Defined in [NDArray/index.ts:126](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L126)*

#### Type declaration:

▸ (): *this*

___

###  square

• **square**: *function*

*Defined in [Matrix/index.ts:36](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Matrix/index.ts#L36)*

#### Type declaration:

▸ (): *void*

___

###  subtract

• **subtract**: *function*

*Inherited from [NDArray](ndarray.md).[subtract](ndarray.md#subtract)*

*Defined in [NDArray/index.ts:127](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L127)*

#### Type declaration:

▸ (`y`: [NDArray](ndarray.md)): *this*

**Parameters:**

Name | Type |
------ | ------ |
`y` | [NDArray](ndarray.md) |

___

###  swap

• **swap**: *function*

*Defined in [Matrix/index.ts:37](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Matrix/index.ts#L37)*

#### Type declaration:

▸ (`i`: number, `j`: number): *this*

**Parameters:**

Name | Type |
------ | ------ |
`i` | number |
`j` | number |

___

###  tan

• **tan**: *function*

*Inherited from [NDArray](ndarray.md).[tan](ndarray.md#tan)*

*Defined in [NDArray/index.ts:128](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L128)*

#### Type declaration:

▸ (): *this*

___

###  tanh

• **tanh**: *function*

*Inherited from [NDArray](ndarray.md).[tanh](ndarray.md#tanh)*

*Defined in [NDArray/index.ts:129](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L129)*

#### Type declaration:

▸ (): *this*

___

###  toArray

• **toArray**: *function*

*Defined in [Matrix/index.ts:38](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Matrix/index.ts#L38)*

#### Type declaration:

▸ (): *number[][]*

___

###  toString

• **toString**: *function*

*Defined in [Matrix/index.ts:39](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Matrix/index.ts#L39)*

#### Type declaration:

▸ (): *string*

___

###  trace

• **trace**: *function*

*Defined in [Matrix/index.ts:40](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Matrix/index.ts#L40)*

#### Type declaration:

▸ (): *number*

___

###  transpose

• **transpose**: *function*

*Defined in [Matrix/index.ts:41](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Matrix/index.ts#L41)*

#### Type declaration:

▸ (): *this*

___

###  trunc

• **trunc**: *function*

*Inherited from [NDArray](ndarray.md).[trunc](ndarray.md#trunc)*

*Defined in [NDArray/index.ts:130](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L130)*

#### Type declaration:

▸ (): *this*

___

###  type

• **type**: *[TypedArrayConstructor](../README.md#typedarrayconstructor)* =  Float32Array

*Implementation of [INDArray](../interfaces/indarray.md).[type](../interfaces/indarray.md#type)*

*Inherited from [NDArray](ndarray.md).[type](ndarray.md#type)*

*Defined in [NDArray/index.ts:131](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L131)*

___

### `Static` abs

▪ **abs**: *function*

*Inherited from [NDArray](ndarray.md).[abs](ndarray.md#static-abs)*

*Defined in [NDArray/index.ts:14](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L14)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *`T`*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

### `Static` acos

▪ **acos**: *function*

*Inherited from [NDArray](ndarray.md).[acos](ndarray.md#static-acos)*

*Defined in [NDArray/index.ts:15](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L15)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *`T`*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

### `Static` acosh

▪ **acosh**: *function*

*Inherited from [NDArray](ndarray.md).[acosh](ndarray.md#static-acosh)*

*Defined in [NDArray/index.ts:16](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L16)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *`T`*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

### `Static` add

▪ **add**: *function*

*Inherited from [NDArray](ndarray.md).[add](ndarray.md#static-add)*

*Defined in [NDArray/index.ts:17](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L17)*

#### Type declaration:

▸ <**T**>(`x`: `T`, `y`: `T`, `alpha?`: number): *`T`*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |
`y` | `T` |
`alpha?` | number |

___

### `Static` asin

▪ **asin**: *function*

*Inherited from [NDArray](ndarray.md).[asin](ndarray.md#static-asin)*

*Defined in [NDArray/index.ts:18](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L18)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *`T`*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

### `Static` asinh

▪ **asinh**: *function*

*Inherited from [NDArray](ndarray.md).[asinh](ndarray.md#static-asinh)*

*Defined in [NDArray/index.ts:19](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L19)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *`T`*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

### `Static` atan

▪ **atan**: *function*

*Inherited from [NDArray](ndarray.md).[atan](ndarray.md#static-atan)*

*Defined in [NDArray/index.ts:20](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L20)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *`T`*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

### `Static` atanh

▪ **atanh**: *function*

*Inherited from [NDArray](ndarray.md).[atanh](ndarray.md#static-atanh)*

*Defined in [NDArray/index.ts:21](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L21)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *`T`*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

### `Static` augment

▪ **augment**: *function*

*Defined in [Matrix/index.ts:5](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Matrix/index.ts#L5)*

#### Type declaration:

▸ <**T**>(`x`: `T`, `y`: `T`): *`T`*

**Type parameters:**

▪ **T**: *[Matrix](matrix.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |
`y` | `T` |

___

### `Static` binOp

▪ **binOp**: *function*

*Inherited from [NDArray](ndarray.md).[binOp](ndarray.md#static-binop)*

*Defined in [NDArray/index.ts:22](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L22)*

#### Type declaration:

▸ <**T**>(`x`: `T`, `y`: `T`, `f`: function): *`T`*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

▪ **x**: *`T`*

▪ **y**: *`T`*

▪ **f**: *function*

▸ (`a`: number, `b`: number, `index`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`a` | number |
`b` | number |
`index` | number |

___

### `Static` cbrt

▪ **cbrt**: *function*

*Inherited from [NDArray](ndarray.md).[cbrt](ndarray.md#static-cbrt)*

*Defined in [NDArray/index.ts:23](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L23)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *`T`*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

### `Static` ceil

▪ **ceil**: *function*

*Inherited from [NDArray](ndarray.md).[ceil](ndarray.md#static-ceil)*

*Defined in [NDArray/index.ts:24](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L24)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *`T`*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

### `Static` check

▪ **check**: *function*

*Inherited from [NDArray](ndarray.md).[check](ndarray.md#static-check)*

*Defined in [NDArray/index.ts:25](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L25)*

#### Type declaration:

▸ <**T**>(`x`: `T`, ...`indices`: number[]): *void*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |
`...indices` | number[] |

___

### `Static` copy

▪ **copy**: *function*

*Inherited from [NDArray](ndarray.md).[copy](ndarray.md#static-copy)*

*Defined in [NDArray/index.ts:26](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L26)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *`T`*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

### `Static` cos

▪ **cos**: *function*

*Inherited from [NDArray](ndarray.md).[cos](ndarray.md#static-cos)*

*Defined in [NDArray/index.ts:27](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L27)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *`T`*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

### `Static` cosh

▪ **cosh**: *function*

*Inherited from [NDArray](ndarray.md).[cosh](ndarray.md#static-cosh)*

*Defined in [NDArray/index.ts:28](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L28)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *`T`*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

### `Static` determinant

▪ **determinant**: *function*

*Defined in [Matrix/index.ts:6](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Matrix/index.ts#L6)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *number*

**Type parameters:**

▪ **T**: *[Matrix](matrix.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

### `Static` diagonal

▪ **diagonal**: *function*

*Defined in [Matrix/index.ts:7](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Matrix/index.ts#L7)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *`T`*

**Type parameters:**

▪ **T**: *[Matrix](matrix.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

### `Static` dot

▪ **dot**: *function*

*Inherited from [NDArray](ndarray.md).[dot](ndarray.md#static-dot)*

*Defined in [NDArray/index.ts:29](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L29)*

#### Type declaration:

▸ <**T**>(`x`: `T`, `y`: `T`): *number*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |
`y` | `T` |

___

### `Static` each

▪ **each**: *function*

*Inherited from [NDArray](ndarray.md).[each](ndarray.md#static-each)*

*Defined in [NDArray/index.ts:30](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L30)*

#### Type declaration:

▸ <**T**>(`x`: `T`, `f`: function): *`T`*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

▪ **x**: *`T`*

▪ **f**: *function*

▸ (`value`: number, `i`: number, `src`: [TypedArray](../README.md#typedarray)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`i` | number |
`src` | [TypedArray](../README.md#typedarray) |

___

### `Static` equals

▪ **equals**: *function*

*Inherited from [NDArray](ndarray.md).[equals](ndarray.md#static-equals)*

*Defined in [NDArray/index.ts:31](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L31)*

#### Type declaration:

▸ <**T**>(`x`: `T`, `y`: `T`): *boolean*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |
`y` | `T` |

___

### `Static` equidimensional

▪ **equidimensional**: *function*

*Inherited from [NDArray](ndarray.md).[equidimensional](ndarray.md#static-equidimensional)*

*Defined in [NDArray/index.ts:32](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L32)*

#### Type declaration:

▸ <**T**>(`x`: `T`, `y`: `T`): *void*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |
`y` | `T` |

___

### `Static` equilateral

▪ **equilateral**: *function*

*Inherited from [NDArray](ndarray.md).[equilateral](ndarray.md#static-equilateral)*

*Defined in [NDArray/index.ts:33](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L33)*

#### Type declaration:

▸ <**T**>(`x`: `T`, `y`: `T`): *void*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |
`y` | `T` |

___

### `Static` exp

▪ **exp**: *function*

*Inherited from [NDArray](ndarray.md).[exp](ndarray.md#static-exp)*

*Defined in [NDArray/index.ts:34](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L34)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *`T`*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

### `Static` expm1

▪ **expm1**: *function*

*Inherited from [NDArray](ndarray.md).[expm1](ndarray.md#static-expm1)*

*Defined in [NDArray/index.ts:35](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L35)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *`T`*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

### `Static` eye

▪ **eye**: *function*

*Inherited from [NDArray](ndarray.md).[eye](ndarray.md#static-eye)*

*Defined in [NDArray/index.ts:36](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L36)*

#### Type declaration:

▸ <**T**>(`n`: number): *`T`*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

___

### `Static` fill

▪ **fill**: *function*

*Inherited from [NDArray](ndarray.md).[fill](ndarray.md#static-fill)*

*Defined in [NDArray/index.ts:37](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L37)*

#### Type declaration:

▸ <**T**>(`x`: `T`, `value`: number | function): *`T`*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |
`value` | number \| function |

___

### `Static` floor

▪ **floor**: *function*

*Inherited from [NDArray](ndarray.md).[floor](ndarray.md#static-floor)*

*Defined in [NDArray/index.ts:38](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L38)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *`T`*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

### `Static` fround

▪ **fround**: *function*

*Inherited from [NDArray](ndarray.md).[fround](ndarray.md#static-fround)*

*Defined in [NDArray/index.ts:39](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L39)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *`T`*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

### `Static` gauss

▪ **gauss**: *function*

*Defined in [Matrix/index.ts:8](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Matrix/index.ts#L8)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *`T`*

**Type parameters:**

▪ **T**: *[Matrix](matrix.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

### `Static` get

▪ **get**: *function*

*Inherited from [NDArray](ndarray.md).[get](ndarray.md#static-get)*

*Defined in [NDArray/index.ts:40](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L40)*

#### Type declaration:

▸ <**T**>(`x`: `T`, ...`indices`: number[]): *number*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |
`...indices` | number[] |

___

### `Static` identity

▪ **identity**: *function*

*Defined in [Matrix/index.ts:9](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Matrix/index.ts#L9)*

#### Type declaration:

▸ <**T**>(`size`: number): *`T`*

**Type parameters:**

▪ **T**: *[Matrix](matrix.md)*

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

___

### `Static` inverse

▪ **inverse**: *function*

*Defined in [Matrix/index.ts:10](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Matrix/index.ts#L10)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *`T`*

**Type parameters:**

▪ **T**: *[Matrix](matrix.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

### `Static` log

▪ **log**: *function*

*Inherited from [NDArray](ndarray.md).[log](ndarray.md#static-log)*

*Defined in [NDArray/index.ts:41](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L41)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *`T`*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

### `Static` log10

▪ **log10**: *function*

*Inherited from [NDArray](ndarray.md).[log10](ndarray.md#static-log10)*

*Defined in [NDArray/index.ts:42](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L42)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *`T`*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

### `Static` log1p

▪ **log1p**: *function*

*Inherited from [NDArray](ndarray.md).[log1p](ndarray.md#static-log1p)*

*Defined in [NDArray/index.ts:43](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L43)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *`T`*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

### `Static` log2

▪ **log2**: *function*

*Inherited from [NDArray](ndarray.md).[log2](ndarray.md#static-log2)*

*Defined in [NDArray/index.ts:44](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L44)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *`T`*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

### `Static` lu

▪ **lu**: *function*

*Defined in [Matrix/index.ts:11](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Matrix/index.ts#L11)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *[`T`, `T`, `Int32Array`]*

**Type parameters:**

▪ **T**: *[Matrix](matrix.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

### `Static` magic

▪ **magic**: *function*

*Defined in [Matrix/index.ts:12](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Matrix/index.ts#L12)*

#### Type declaration:

▸ <**T**>(`size`: number, `type?`: [TypedArrayConstructor](../README.md#typedarrayconstructor)): *`T`*

**Type parameters:**

▪ **T**: *[Matrix](matrix.md)*

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |
`type?` | [TypedArrayConstructor](../README.md#typedarrayconstructor) |

___

### `Static` magnitude

▪ **magnitude**: *function*

*Inherited from [NDArray](ndarray.md).[magnitude](ndarray.md#static-magnitude)*

*Defined in [NDArray/index.ts:45](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L45)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *number*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

### `Static` map

▪ **map**: *function*

*Inherited from [NDArray](ndarray.md).[map](ndarray.md#static-map)*

*Defined in [NDArray/index.ts:46](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L46)*

#### Type declaration:

▸ <**T**>(`x`: `T`, `f`: function): *`T`*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

▪ **x**: *`T`*

▪ **f**: *function*

▸ (`value`: number, `i`: number, `src`: [TypedArray](../README.md#typedarray)): *number*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`i` | number |
`src` | [TypedArray](../README.md#typedarray) |

___

### `Static` max

▪ **max**: *function*

*Inherited from [NDArray](ndarray.md).[max](ndarray.md#static-max)*

*Defined in [NDArray/index.ts:47](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L47)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *number*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

### `Static` min

▪ **min**: *function*

*Inherited from [NDArray](ndarray.md).[min](ndarray.md#static-min)*

*Defined in [NDArray/index.ts:48](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L48)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *number*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

### `Static` multiply

▪ **multiply**: *function*

*Defined in [Matrix/index.ts:13](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Matrix/index.ts#L13)*

#### Type declaration:

▸ <**T**>(`x`: `T`, `y`: `T`): *`T`*

**Type parameters:**

▪ **T**: *[Matrix](matrix.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |
`y` | `T` |

___

### `Static` ones

▪ **ones**: *function*

*Inherited from [NDArray](ndarray.md).[ones](ndarray.md#static-ones)*

*Defined in [NDArray/index.ts:49](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L49)*

#### Type declaration:

▸ <**T**>(...`shape`: number[]): *`T`*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`...shape` | number[] |

___

### `Static` plu

▪ **plu**: *function*

*Defined in [Matrix/index.ts:14](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Matrix/index.ts#L14)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *[`T`, `Int32Array`]*

**Type parameters:**

▪ **T**: *[Matrix](matrix.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

### `Static` pow

▪ **pow**: *function*

*Inherited from [NDArray](ndarray.md).[pow](ndarray.md#static-pow)*

*Defined in [NDArray/index.ts:50](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L50)*

#### Type declaration:

▸ <**T**>(`x`: `T`, `exponent`: number): *`T`*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |
`exponent` | number |

___

### `Static` product

▪ **product**: *function*

*Inherited from [NDArray](ndarray.md).[product](ndarray.md#static-product)*

*Defined in [NDArray/index.ts:51](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L51)*

#### Type declaration:

▸ <**T**>(`x`: `T`, `y`: `T`): *`T`*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |
`y` | `T` |

___

### `Static` random

▪ **random**: *function*

*Inherited from [NDArray](ndarray.md).[random](ndarray.md#static-random)*

*Defined in [NDArray/index.ts:52](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L52)*

#### Type declaration:

▸ <**T**>(...`shape`: number[]): *`T`*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`...shape` | number[] |

___

### `Static` range

▪ **range**: *function*

*Inherited from [NDArray](ndarray.md).[range](ndarray.md#static-range)*

*Defined in [NDArray/index.ts:53](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L53)*

#### Type declaration:

▸ <**T**>(...`args`: number[]): *`T`*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | number[] |

___

### `Static` rank

▪ **rank**: *function*

*Defined in [Matrix/index.ts:15](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Matrix/index.ts#L15)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *number*

**Type parameters:**

▪ **T**: *[Matrix](matrix.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

### `Static` reduce

▪ **reduce**: *function*

*Inherited from [NDArray](ndarray.md).[reduce](ndarray.md#static-reduce)*

*Defined in [NDArray/index.ts:54](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L54)*

#### Type declaration:

▸ (`x`: [NDArray](ndarray.md), `f`: function, `initialValue?`: number): *number*

**Parameters:**

▪ **x**: *[NDArray](ndarray.md)*

▪ **f**: *function*

▸ (`acc`: number, `value`: number, `i`: number, `src`: [TypedArray](../README.md#typedarray)): *number*

**Parameters:**

Name | Type |
------ | ------ |
`acc` | number |
`value` | number |
`i` | number |
`src` | [TypedArray](../README.md#typedarray) |

▪`Optional`  **initialValue**: *number*

___

### `Static` reshape

▪ **reshape**: *function*

*Inherited from [NDArray](ndarray.md).[reshape](ndarray.md#static-reshape)*

*Defined in [NDArray/index.ts:59](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L59)*

#### Type declaration:

▸ <**T**>(`x`: `T`, `s`: number[]): *`T`*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |
`s` | number[] |

___

### `Static` round

▪ **round**: *function*

*Inherited from [NDArray](ndarray.md).[round](ndarray.md#static-round)*

*Defined in [NDArray/index.ts:60](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L60)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *`T`*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

### `Static` rowAdd

▪ **rowAdd**: *function*

*Defined in [Matrix/index.ts:16](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Matrix/index.ts#L16)*

#### Type declaration:

▸ <**T**>(`x`: `T`, `dest`: number, `source`: number, `scalar?`: number): *`T`*

**Type parameters:**

▪ **T**: *[Matrix](matrix.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |
`dest` | number |
`source` | number |
`scalar?` | number |

___

### `Static` scale

▪ **scale**: *function*

*Inherited from [NDArray](ndarray.md).[scale](ndarray.md#static-scale)*

*Defined in [NDArray/index.ts:61](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L61)*

#### Type declaration:

▸ <**T**>(`x`: `T`, `scalar`: number): *`T`*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |
`scalar` | number |

___

### `Static` set

▪ **set**: *function*

*Inherited from [NDArray](ndarray.md).[set](ndarray.md#static-set)*

*Defined in [NDArray/index.ts:62](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L62)*

#### Type declaration:

▸ <**T**>(`x`: `T`, ...`args`: number[]): *void*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |
`...args` | number[] |

___

### `Static` sign

▪ **sign**: *function*

*Inherited from [NDArray](ndarray.md).[sign](ndarray.md#static-sign)*

*Defined in [NDArray/index.ts:63](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L63)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *`T`*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

### `Static` sin

▪ **sin**: *function*

*Inherited from [NDArray](ndarray.md).[sin](ndarray.md#static-sin)*

*Defined in [NDArray/index.ts:64](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L64)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *`T`*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

### `Static` sinh

▪ **sinh**: *function*

*Inherited from [NDArray](ndarray.md).[sinh](ndarray.md#static-sinh)*

*Defined in [NDArray/index.ts:65](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L65)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *`T`*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

### `Static` slice

▪ **slice**: *function*

*Inherited from [NDArray](ndarray.md).[slice](ndarray.md#static-slice)*

*Defined in [NDArray/index.ts:66](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L66)*

#### Type declaration:

▸ <**T**>(`x`: `T`, `start?`: number, `step?`: number, `end?`: number): *`T`*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |
`start?` | number |
`step?` | number |
`end?` | number |

___

### `Static` solve

▪ **solve**: *function*

*Defined in [Matrix/index.ts:17](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Matrix/index.ts#L17)*

#### Type declaration:

▸ <**T**>(`x`: `T`, `y`: `T`): *`T`*

**Type parameters:**

▪ **T**: *[Matrix](matrix.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |
`y` | `T` |

___

### `Static` sqrt

▪ **sqrt**: *function*

*Inherited from [NDArray](ndarray.md).[sqrt](ndarray.md#static-sqrt)*

*Defined in [NDArray/index.ts:67](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L67)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *`T`*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

### `Static` square

▪ **square**: *function*

*Defined in [Matrix/index.ts:18](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Matrix/index.ts#L18)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *void*

**Type parameters:**

▪ **T**: *[Matrix](matrix.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

### `Static` subtract

▪ **subtract**: *function*

*Inherited from [NDArray](ndarray.md).[subtract](ndarray.md#static-subtract)*

*Defined in [NDArray/index.ts:68](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L68)*

#### Type declaration:

▸ <**T**>(`x`: `T`, `y`: `T`): *`T`*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |
`y` | `T` |

___

### `Static` swap

▪ **swap**: *function*

*Defined in [Matrix/index.ts:19](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Matrix/index.ts#L19)*

#### Type declaration:

▸ <**T**>(`x`: `T`, `i`: number, `j`: number): *`T`*

**Type parameters:**

▪ **T**: *[Matrix](matrix.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |
`i` | number |
`j` | number |

___

### `Static` tan

▪ **tan**: *function*

*Inherited from [NDArray](ndarray.md).[tan](ndarray.md#static-tan)*

*Defined in [NDArray/index.ts:69](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L69)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *`T`*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

### `Static` tanh

▪ **tanh**: *function*

*Inherited from [NDArray](ndarray.md).[tanh](ndarray.md#static-tanh)*

*Defined in [NDArray/index.ts:70](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L70)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *`T`*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

### `Static` toArray

▪ **toArray**: *function*

*Defined in [Matrix/index.ts:20](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Matrix/index.ts#L20)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *number[][]*

**Type parameters:**

▪ **T**: *[Matrix](matrix.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

### `Static` toString

▪ **toString**: *function*

*Defined in [Matrix/index.ts:21](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Matrix/index.ts#L21)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *string*

**Type parameters:**

▪ **T**: *[Matrix](matrix.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

### `Static` trace

▪ **trace**: *function*

*Defined in [Matrix/index.ts:22](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Matrix/index.ts#L22)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *number*

**Type parameters:**

▪ **T**: *[Matrix](matrix.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

### `Static` transpose

▪ **transpose**: *function*

*Defined in [Matrix/index.ts:23](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Matrix/index.ts#L23)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *`T`*

**Type parameters:**

▪ **T**: *[Matrix](matrix.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

### `Static` trunc

▪ **trunc**: *function*

*Inherited from [NDArray](ndarray.md).[trunc](ndarray.md#static-trunc)*

*Defined in [NDArray/index.ts:71](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L71)*

#### Type declaration:

▸ <**T**>(`x`: `T`): *`T`*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | `T` |

___

### `Static` zeros

▪ **zeros**: *function*

*Inherited from [NDArray](ndarray.md).[zeros](ndarray.md#static-zeros)*

*Defined in [NDArray/index.ts:72](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L72)*

#### Type declaration:

▸ <**T**>(...`shape`: number[]): *`T`*

**Type parameters:**

▪ **T**: *[NDArray](ndarray.md)*

**Parameters:**

Name | Type |
------ | ------ |
`...shape` | number[] |

## Accessors

###  T

• **get T**(): *[Matrix](matrix.md)*

*Defined in [Matrix/index.ts:54](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Matrix/index.ts#L54)*

**Returns:** *[Matrix](matrix.md)*