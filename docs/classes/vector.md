> **[Vectorious](../README.md)**

[Vector](vector.md) /

# Class: Vector

## Hierarchy

* [NDArray](ndarray.md)

  * **Vector**

## Implements

* [INDArray](../interfaces/indarray.md)

## Index

### Constructors

* [constructor](vector.md#constructor)

### Properties

* [abs](vector.md#abs)
* [acos](vector.md#acos)
* [acosh](vector.md#acosh)
* [add](vector.md#add)
* [angle](vector.md#angle)
* [asin](vector.md#asin)
* [asinh](vector.md#asinh)
* [atan](vector.md#atan)
* [atanh](vector.md#atanh)
* [binOp](vector.md#binop)
* [cbrt](vector.md#cbrt)
* [ceil](vector.md#ceil)
* [check](vector.md#check)
* [combine](vector.md#combine)
* [copy](vector.md#copy)
* [cos](vector.md#cos)
* [cosh](vector.md#cosh)
* [cross](vector.md#cross)
* [data](vector.md#data)
* [dot](vector.md#dot)
* [each](vector.md#each)
* [equals](vector.md#equals)
* [equidimensional](vector.md#equidimensional)
* [equilateral](vector.md#equilateral)
* [exp](vector.md#exp)
* [expm1](vector.md#expm1)
* [eye](vector.md#eye)
* [fill](vector.md#fill)
* [floor](vector.md#floor)
* [fround](vector.md#fround)
* [get](vector.md#get)
* [length](vector.md#length)
* [log](vector.md#log)
* [log10](vector.md#log10)
* [log1p](vector.md#log1p)
* [log2](vector.md#log2)
* [magnitude](vector.md#magnitude)
* [map](vector.md#map)
* [max](vector.md#max)
* [min](vector.md#min)
* [normalize](vector.md#normalize)
* [pow](vector.md#pow)
* [product](vector.md#product)
* [project](vector.md#project)
* [push](vector.md#push)
* [reduce](vector.md#reduce)
* [reshape](vector.md#reshape)
* [round](vector.md#round)
* [scale](vector.md#scale)
* [set](vector.md#set)
* [shape](vector.md#shape)
* [sign](vector.md#sign)
* [sin](vector.md#sin)
* [sinh](vector.md#sinh)
* [slice](vector.md#slice)
* [sqrt](vector.md#sqrt)
* [subtract](vector.md#subtract)
* [tan](vector.md#tan)
* [tanh](vector.md#tanh)
* [toArray](vector.md#toarray)
* [toString](vector.md#tostring)
* [trunc](vector.md#trunc)
* [type](vector.md#type)
* [abs](vector.md#static-abs)
* [acos](vector.md#static-acos)
* [acosh](vector.md#static-acosh)
* [add](vector.md#static-add)
* [angle](vector.md#static-angle)
* [asin](vector.md#static-asin)
* [asinh](vector.md#static-asinh)
* [atan](vector.md#static-atan)
* [atanh](vector.md#static-atanh)
* [binOp](vector.md#static-binop)
* [cbrt](vector.md#static-cbrt)
* [ceil](vector.md#static-ceil)
* [check](vector.md#static-check)
* [combine](vector.md#static-combine)
* [copy](vector.md#static-copy)
* [cos](vector.md#static-cos)
* [cosh](vector.md#static-cosh)
* [cross](vector.md#static-cross)
* [dot](vector.md#static-dot)
* [each](vector.md#static-each)
* [equals](vector.md#static-equals)
* [equidimensional](vector.md#static-equidimensional)
* [equilateral](vector.md#static-equilateral)
* [exp](vector.md#static-exp)
* [expm1](vector.md#static-expm1)
* [eye](vector.md#static-eye)
* [fill](vector.md#static-fill)
* [floor](vector.md#static-floor)
* [fround](vector.md#static-fround)
* [get](vector.md#static-get)
* [log](vector.md#static-log)
* [log10](vector.md#static-log10)
* [log1p](vector.md#static-log1p)
* [log2](vector.md#static-log2)
* [magnitude](vector.md#static-magnitude)
* [map](vector.md#static-map)
* [max](vector.md#static-max)
* [min](vector.md#static-min)
* [normalize](vector.md#static-normalize)
* [ones](vector.md#static-ones)
* [pow](vector.md#static-pow)
* [product](vector.md#static-product)
* [project](vector.md#static-project)
* [push](vector.md#static-push)
* [random](vector.md#static-random)
* [range](vector.md#static-range)
* [reduce](vector.md#static-reduce)
* [reshape](vector.md#static-reshape)
* [round](vector.md#static-round)
* [scale](vector.md#static-scale)
* [set](vector.md#static-set)
* [sign](vector.md#static-sign)
* [sin](vector.md#static-sin)
* [sinh](vector.md#static-sinh)
* [slice](vector.md#static-slice)
* [sqrt](vector.md#static-sqrt)
* [subtract](vector.md#static-subtract)
* [tan](vector.md#static-tan)
* [tanh](vector.md#static-tanh)
* [toArray](vector.md#static-toarray)
* [toString](vector.md#static-tostring)
* [trunc](vector.md#static-trunc)
* [zeros](vector.md#static-zeros)

### Accessors

* [w](vector.md#w)
* [x](vector.md#x)
* [y](vector.md#y)
* [z](vector.md#z)

## Constructors

###  constructor

\+ **new Vector**(`data?`: any): *[Vector](vector.md)*

*Overrides [NDArray](ndarray.md).[constructor](ndarray.md#constructor)*

*Defined in [Vector/index.ts:20](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Vector/index.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`data?` | any |

**Returns:** *[Vector](vector.md)*

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

###  angle

• **angle**: *function*

*Defined in [Vector/index.ts:13](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Vector/index.ts#L13)*

#### Type declaration:

▸ (`x`: [Vector](vector.md)): *number*

**Parameters:**

Name | Type |
------ | ------ |
`x` | [Vector](vector.md) |

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

###  combine

• **combine**: *function*

*Defined in [Vector/index.ts:14](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Vector/index.ts#L14)*

#### Type declaration:

▸ (`x`: [Vector](vector.md)): *this*

**Parameters:**

Name | Type |
------ | ------ |
`x` | [Vector](vector.md) |

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

###  cross

• **cross**: *function*

*Defined in [Vector/index.ts:15](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Vector/index.ts#L15)*

#### Type declaration:

▸ (`x`: [Vector](vector.md)): *this*

**Parameters:**

Name | Type |
------ | ------ |
`x` | [Vector](vector.md) |

___

###  data

• **data**: *[TypedArray](../README.md#typedarray)* =  new Float32Array(0)

*Implementation of [INDArray](../interfaces/indarray.md).[data](../interfaces/indarray.md#data)*

*Inherited from [NDArray](ndarray.md).[data](ndarray.md#data)*

*Defined in [NDArray/index.ts:89](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L89)*

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

###  normalize

• **normalize**: *function*

*Defined in [Vector/index.ts:16](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Vector/index.ts#L16)*

#### Type declaration:

▸ (): *this*

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

###  project

• **project**: *function*

*Defined in [Vector/index.ts:17](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Vector/index.ts#L17)*

#### Type declaration:

▸ (`x`: [Vector](vector.md)): *this*

**Parameters:**

Name | Type |
------ | ------ |
`x` | [Vector](vector.md) |

___

###  push

• **push**: *function*

*Defined in [Vector/index.ts:18](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Vector/index.ts#L18)*

#### Type declaration:

▸ (`value`: number): *this*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

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

###  sqrt

• **sqrt**: *function*

*Inherited from [NDArray](ndarray.md).[sqrt](ndarray.md#sqrt)*

*Defined in [NDArray/index.ts:126](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/NDArray/index.ts#L126)*

#### Type declaration:

▸ (): *this*

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

*Defined in [Vector/index.ts:19](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Vector/index.ts#L19)*

#### Type declaration:

▸ (): *number[]*

___

###  toString

• **toString**: *function*

*Defined in [Vector/index.ts:20](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Vector/index.ts#L20)*

#### Type declaration:

▸ (): *string*

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

### `Static` angle

▪ **angle**: *function*

*Defined in [Vector/index.ts:4](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Vector/index.ts#L4)*

#### Type declaration:

▸ (`x`: [Vector](vector.md), `y`: [Vector](vector.md)): *number*

**Parameters:**

Name | Type |
------ | ------ |
`x` | [Vector](vector.md) |
`y` | [Vector](vector.md) |

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

### `Static` combine

▪ **combine**: *function*

*Defined in [Vector/index.ts:5](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Vector/index.ts#L5)*

#### Type declaration:

▸ (`x`: [Vector](vector.md), `y`: [Vector](vector.md)): *[Vector](vector.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | [Vector](vector.md) |
`y` | [Vector](vector.md) |

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

### `Static` cross

▪ **cross**: *function*

*Defined in [Vector/index.ts:6](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Vector/index.ts#L6)*

#### Type declaration:

▸ (`x`: [Vector](vector.md), `y`: [Vector](vector.md)): *[Vector](vector.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | [Vector](vector.md) |
`y` | [Vector](vector.md) |

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

### `Static` normalize

▪ **normalize**: *function*

*Defined in [Vector/index.ts:7](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Vector/index.ts#L7)*

#### Type declaration:

▸ (`x`: [Vector](vector.md)): *[Vector](vector.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | [Vector](vector.md) |

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

### `Static` project

▪ **project**: *function*

*Defined in [Vector/index.ts:8](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Vector/index.ts#L8)*

#### Type declaration:

▸ (`x`: [Vector](vector.md), `y`: [Vector](vector.md)): *[Vector](vector.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | [Vector](vector.md) |
`y` | [Vector](vector.md) |

___

### `Static` push

▪ **push**: *function*

*Defined in [Vector/index.ts:9](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Vector/index.ts#L9)*

#### Type declaration:

▸ (`x`: [Vector](vector.md), `value`: number): *[Vector](vector.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | [Vector](vector.md) |
`value` | number |

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

*Defined in [Vector/index.ts:10](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Vector/index.ts#L10)*

#### Type declaration:

▸ (`x`: [Vector](vector.md)): *number[]*

**Parameters:**

Name | Type |
------ | ------ |
`x` | [Vector](vector.md) |

___

### `Static` toString

▪ **toString**: *function*

*Defined in [Vector/index.ts:11](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Vector/index.ts#L11)*

#### Type declaration:

▸ (`x`: [Vector](vector.md)): *string*

**Parameters:**

Name | Type |
------ | ------ |
`x` | [Vector](vector.md) |

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

###  w

• **get w**(): *number*

*Defined in [Vector/index.ts:71](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Vector/index.ts#L71)*

Getter for vector[3]

**Returns:** *number*

• **set w**(`value`: number): *void*

*Defined in [Vector/index.ts:78](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Vector/index.ts#L78)*

Setter for vector[3]

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *void*

___

###  x

• **get x**(): *number*

*Defined in [Vector/index.ts:29](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Vector/index.ts#L29)*

Getter for vector[0]

**Returns:** *number*

• **set x**(`value`: number): *void*

*Defined in [Vector/index.ts:36](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Vector/index.ts#L36)*

Setter for vector[0]

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *void*

___

###  y

• **get y**(): *number*

*Defined in [Vector/index.ts:43](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Vector/index.ts#L43)*

Getter for vector[1]

**Returns:** *number*

• **set y**(`value`: number): *void*

*Defined in [Vector/index.ts:50](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Vector/index.ts#L50)*

Setter for vector[1]

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *void*

___

###  z

• **get z**(): *number*

*Defined in [Vector/index.ts:57](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Vector/index.ts#L57)*

Getter for vector[2]

**Returns:** *number*

• **set z**(`value`: number): *void*

*Defined in [Vector/index.ts:64](https://github.com/mateogianolio/vectorious/blob/2d4cf97/src/Vector/index.ts#L64)*

Setter for vector[2]

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *void*