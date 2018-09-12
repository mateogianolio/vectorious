/**
 * @class Vector
 **/
class Vector {
  /**
   * @method constructor
   * @memberof Vector
   * @desc Creates a two-dimensional `Vector` from the supplied arguments.
   **/
  constructor(data) {
    this.type = Float64Array;
    this.length = 0;

    if (data instanceof Vector) {
      this.combine(data);
    } else if (data && data.shape) {
      this.data = new data.type(data.data);
      this.length = data.shape[0] * data.shape[1];
      this.type = data.type;
    } else if (data instanceof Array) {
      this.data = new this.type(data);
      this.length = data.length;
    } else if (data && data.buffer && data.buffer instanceof ArrayBuffer) {
      this.data = data;
      this.length = data.length;
      this.type = data.constructor;
    }
  }

  /**
   * Static method. Perform binary operation on two vectors `a` and `b` together.
   * @memberof Vector
   * @param {Vector} a
   * @param {Vector} b
   * @param {Function} op
   * @returns {Vector} a vector containing the results of binaery operation of `a` and `b`
   **/
  static binOp(a, b, op) {
    return new Vector(a).binOp(b, op);
  }

  /**
   * Perform binary operation on `vector` to the current vector.
   * @memberof Vector
   * @param {Vector} vector
   * @param {Function} op
   * @returns {Vector} this
   **/
  binOp(vector, op) {
    var l1 = this.length,
        l2 = vector.length;
    if (l1 !== l2)
      throw new Error('sizes do not match!');
    if (!l1 && !l2)
      return this;

    var i;
    for (i = 0; i < l1; i++)
      this.data[i] = op(this.data[i], vector.data[i], i);

    return this;
  }

  /**
   * Static method. Adds two vectors `a` and `b` together.
   * @memberof Vector
   * @param {Vector} a
   * @param {Vector} b
   * @returns {Vector} a vector containing the sum of `a` and `b`
   **/
  static add(a, b) {
    return new Vector(a).add(b);
  }

  /**
   * Adds `vector` to the current vector.
   * @memberof Vector
   * @param {Vector} vector
   * @returns {Vector} this
   **/
  add(vector) {
    return this.binOp(vector, function(a, b) { return a + b });
  }

  /**
   * Static method. Subtracts the vector `b` from vector `a`.
   * @memberof Vector
   * @param {Vector} a
   * @param {Vector} b
   * @returns {Vector} a vector containing the difference between `a` and `b`
   **/
  static subtract(a, b) {
    return new Vector(a).subtract(b);
  }

  /**
   * Subtracts `vector` from the current vector.
   * @memberof Vector
   * @param {Vector} vector
   * @returns {Vector} this
   **/
  subtract(vector) {
    return this.binOp(vector, function(a, b) { return a - b });
  }

  /**
   * Static method. Multiplies all elements of `vector` with a specified `scalar`.
   * @memberof Vector
   * @param {Vector} vector
   * @param {Number} scalar
   * @returns {Vector} a resultant scaled vector
   **/
  static scale(vector, scalar) {
    return new Vector(vector).scale(scalar);
  }

  /**
   * Multiplies all elements of current vector with a specified `scalar`.
   * @memberof Vector
   * @param {Number} scalar
   * @returns {Vector} this
   **/
  scale(scalar) {
    return this.each(function(_, i, data) {
      data[i] *= scalar;
    });
  }

  /**
   * Static method. Normalizes `vector`, i.e. divides all elements with the magnitude.
   * @memberof Vector
   * @param {Vector} vector
   * @returns {Vector} a resultant normalized vector
   **/
  static normalize(vector) {
    return new Vector(vector).normalize();
  }

  /**
   * Normalizes current vector.
   * @memberof Vector
   * @returns {Vector} a resultant normalized vector
   **/
  normalize() {
    return this.scale(1 / this.magnitude());
  }

  /**
   * Static method. Projects the vector `a` onto the vector `b` using
   * the projection formula `(b * (a * b / b * b))`.
   * @memberof Vector
   * @param {Vector} a
   * @param {Vector} b
   * @returns {Vector} a new resultant projected vector
   **/
  static project(a, b) {
    return a.project(new Vector(b));
  }

  /**
   * Projects the current vector onto `vector` using
   * the projection formula `(b * (a * b / b * b))`.
   * @memberof Vector
   * @param {Vector} vector
   * @returns {Vector} `vector`
   **/
  project(vector) {
    return vector.scale(this.dot(vector) / vector.dot(vector));
  }

    /**
   * Static method. Creates a vector containing optional 'value' (default 0) of `count` size, takes
   * an optional `type` argument which should be an instance of `TypedArray`.
   * @memberof Vector
   * @param {Number} count
   * @param {Number|Function} value
   * @param {TypedArray} type
   * @returns {Vector} a new vector of the specified size and `type`
   **/
  static fill(count, value, type) {
    if (count < 0)
      throw new Error('invalid size');
    if (count === 0)
      return new Vector();
    
    if (value == null) {
      value = 0.0;
    }
    if (type == null) {
      type = Float64Array;
    }
    var data = new type(count),
        i;

    if (typeof value === 'function')
      for (i = 0; i < count; i++)
        data[i] = value(i);
    else
      for (i = 0; i < count; i++)
        data[i] = value;

    return new Vector(data);
  }

  /**
   * Static method. Creates a vector containing zeros (`0`) of `count` size, takes
   * an optional `type` argument which should be an instance of `TypedArray`.
   * @memberof Vector
   * @param {Number} count
   * @param {TypedArray} type
   * @returns {Vector} a new vector of the specified size and `type`
   **/
  static zeros(count, type) {
    return Vector.fill(count, 0.0, type);
  }

  /**
   * Static method. Creates a vector containing ones (`1`) of `count` size, takes
   * an optional `type` argument which should be an instance of `TypedArray`.
   * @memberof Vector
   * @param {Number} count
   * @param {TypedArray} type
   * @returns {Vector} a new vector of the specified size and `type`
   **/
  static ones(count, type) {
    return Vector.fill(count, 1, type);
  }

  /**
   * Static method. Creates a vector of `count` elements containing random
   * values according to a normal distribution, takes an optional `type`
   * argument which should be an instance of `TypedArray`.
   * @memberof Vector
   * @param {Number} count
   * @param {Number} deviation (default 1)
   * @param {Number} mean (default 0)
   * @param {TypedArray} type
   * @returns {Vector} a new vector of the specified size and `type`
   **/
  static random(count, deviation, mean, type) {
    if (deviation == null) {
      deviation = 1;
    }
    if (mean == null) {
      mean = 0;
    }
    return Vector.fill(count, function() {
      return deviation * Math.random() + mean;
    }, type);
  }

  /**
   * Static method. Creates a vector containing a range (can be either ascending or descending)
   * of numbers specified by the arguments provided (e.g. `Vector.range(0, .5, 2)`
   * gives a vector containing all numbers in the interval `[0, 2)` separated by
   * steps of `0.5`), takes an optional `type` argument which should be an instance of
   * `TypedArray`.
   * @memberof Vector
   * @param {Number} start
   * @param {Number} step - optional
   * @param {Number} end
   * @returns {Vector} a new vector containing the specified range of the specified `type`
   **/
  static range() {
    var args = [].slice.call(arguments),
        backwards = false,
        start, step, end;

    var type = Float64Array;
    if (typeof args[args.length - 1] === 'function')
      type = args.pop();

    switch (args.length) {
      case 2:
        end = args.pop();
        step = 1;
        start = args.pop();
        break;
      case 3:
        end = args.pop();
        step = args.pop();
        start = args.pop();
        break;
      default:
        throw new Error('invalid range');
    }

    if (end - start < 0) {
      var copy = end;
      end = start;
      start = copy;
      backwards = true;
    }

    if (step > end - start)
      throw new Error('invalid range');

    var data = new type(Math.ceil((end - start) / step)),
        i = start,
        j = 0;
    if (backwards)
      for (; i < end; i += step, j++)
        data[j] = end - i + start;
    else
      for (; i < end; i += step, j++)
        data[j] = i;

    return new Vector(data);
  }

  /**
   * Static method. Performs dot multiplication with two vectors `a` and `b`.
   * @memberof Vector
   * @param {Vector} a
   * @param {Vector} b
   * @returns {Number} the dot product of the two vectors
   **/
  static dot(a, b) {
    return a.dot(b);
  }

  /**
   * Performs dot multiplication with current vector and `vector`
   * @memberof Vector
   * @param {Vector} vector
   * @returns {Number} the dot product of the two vectors
   **/
  dot(vector) {
    if (this.length !== vector.length)
      throw new Error('sizes do not match');

    var a = this.data,
        b = vector.data,
        result = 0,
        i, l;

    for (i = 0, l = this.length; i < l; i++)
      result += a[i] * b[i];

    return result;
  }

  /**
   * Calculates the magnitude of a vector (also called L2 norm or Euclidean length).
   * @memberof Vector
   * @returns {Number} the magnitude (L2 norm) of the vector
   **/
  magnitude() {
    if (!this.length)
      return 0;

    var result = 0,
        data = this.data,
        i, l;
    for (i = 0, l = this.length; i < l; i++)
      result += data[i] * data[i];

    return Math.sqrt(result);
  }

  /**
   * Static method. Determines the angle between two vectors `a` and `b`.
   * @memberof Vector
   * @param {Vector} a
   * @param {Vector} b
   * @returns {Number} the angle between the two vectors in radians
   **/
  static angle(a, b) {
    return a.angle(b);
  }

  /**
   * Determines the angle between the current vector and `vector`.
   * @memberof Vector
   * @param {Vector} vector
   * @returns {Number} the angle between the two vectors in radians
   **/
  angle(vector) {
    return Math.acos(this.dot(vector) / this.magnitude() / vector.magnitude());
  }

  /**
   * Static method. Checks the equality of two vectors `a` and `b`.
   * @memberof Vector
   * @param {Vector} a
   * @param {Vector} b
   * @returns {Boolean} `true` if the two vectors are equal, `false` otherwise
   **/
  static equals(a, b) {
    return a.equals(b);
  }

  /**
   * Checks the equality of the current vector and `vector`.
   * @memberof Vector
   * @param {Vector} vector
   * @returns {Boolean} `true` if the two vectors are equal, `false` otherwise
   **/
  equals(vector) {
    if (this.length !== vector.length)
      return false;

    var i = 0;
    while (i < this.length && this.data[i] === vector.data[i])
      i++;
    return i === this.length;
  }

  /**
   * Gets the minimum value (smallest) element of current vector.
   * @memberof Vector
   * @returns {Number} the smallest element of the current vector
   **/
  min() {
    return this.reduce(function(acc, item) {
      return acc < item ? acc : item;
    }, Number.POSITIVE_INFINITY);
  }

  /**
   * Gets the maximum value (largest) element of current vector.
   * @memberof Vector
   * @returns {Number} the largest element of current vector
   **/
  max() {
    return this.reduce(function(acc, item) {
      return acc < item ? item : acc;
    }, Number.NEGATIVE_INFINITY);
  }

  /**
   * Check if `index` is within the bound for current vector.
   * @memberof Vector
   * @param {Number} index
   **/
  check(index) {  
    if (!Number.isFinite(index) || index < 0 || index > this.length - 1)
      throw new Error('index out of bounds');
  }

  /**
   * Gets the element at `index` from current vector.
   * @memberof Vector
   * @param {Number} index
   * @returns {Number} the element at `index`
   **/
  get(index) {
    this.check(index);
    return this.data[index];
  }

  /**
   * Sets the element at `index` to `value`.
   * @memberof Vector
   * @param {Number} index
   * @param {Number} value
   * @returns {Vector} this
   **/
  set(index, value) {
    this.check(index);
    this.data[index] = value;
    return this;
  }

  /**
   * Getter for vector[0]
   * @memberof Vector
   * @property {Number}
   * @name Vector#x
   */
  get x() {
    return this.get(0);
  }

  /**
   * Setter for vector[0]
   * @memberof Vector
   * @property {Number}
   * @name Vector#x
   */
  set x(value) {
    return this.set(0, value);
  }

  /**
   * Getter for vector[1]
   * @memberof Vector
   * @property {Number}
   * @name Vector#y
   */
  get y() {
    return this.get(1);
  }

  /**
   * Setter for vector[1]
   * @memberof Vector
   * @property {Number}
   * @name Vector#y
   */
  set y(value) {
    return this.set(1, value);
  }

  /**
   * Getter for vector[2]
   * @memberof Vector
   * @property {Number}
   * @name Vector#z
   */
  get z() {
    return this.get(2);
  }

  /**
   * Setter for vector[2]
   * @memberof Vector
   * @property {Number}
   * @name Vector#z
   */
  set z(value) {
    return this.set(2, value);
  }

  /**
   * Getter for vector[3]
   * @memberof Vector
   * @property {Number}
   * @name Vector#w
   */
  get w() {
    return this.get(3);
  }

  /**
   * Setter for vector[3]
   * @memberof Vector
   * @property {Number}
   * @name Vector#w
   */
  set w(value) {
    return this.set(3, value);
  }

  /**
   * Static method. Combines two vectors `a` and `b` (appends `b` to `a`).
   * @memberof Vector
   * @param {Vector} a
   * @param {Vector} b
   * @returns {Vector} `b` appended to vector `a`
   **/
  static combine(a, b) {
    return new Vector(a).combine(b);
  }

  /**
   * Combines the current vector with `vector`
   * @memberof Vector
   * @param {Vector} vector
   * @returns {Vector} `vector` combined with current vector
   **/
  combine(vector) {
    if (!vector.length)
      return this;
    if (!this.length) {
      this.data = new vector.type(vector.data);
      this.length = vector.length;
      this.type = vector.type;
      return this;
    }

    var l1 = this.length,
        l2 = vector.length,
        d1 = this.data,
        d2 = vector.data;

    var data = new this.type(l1 + l2);
    data.set(d1);
    data.set(d2, l1);

    this.data = data;
    this.length = l1 + l2;

    return this;
  }

  /**
   * Pushes a new `value` into current vector.
   * @memberof Vector
   * @param {Number} value
   * @returns {Vector} `this`
   **/
  push(value) {
    return this.combine(new Vector([value]));
  }

  /**
   * Maps a function `callback` to all elements of current vector.
   * @memberof Vector
   * @param {Function} callback
   * @returns {Vector} `this`
   **/
  map(callback) {
    var mapped = new Vector(this),
        data = mapped.data,
        i;
    for (i = 0; i < this.length; i++)
      data[i] = callback.call(mapped, data[i], i, data);

    return mapped;
  }

  /**
   * Functional version of for-looping the vector, is equivalent
   * to `Array.prototype.forEach`.
   * @memberof Vector
   * @param {Function} callback
   * @returns {Vector} `this`
   **/
  each(callback) {
    var i;
    for (i = 0; i < this.length; i++)
      callback.call(this, this.data[i], i, this.data);

    return this;
  }

  /**
   * Equivalent to `TypedArray.prototype.reduce`.
   * @memberof Vector
   * @param {Function} callback
   * @param {Number} initialValue
   * @returns {Number} result of reduction
   **/
  reduce(callback, initialValue) {
    var l = this.length;
    if (l === 0 && !initialValue)
      throw new Error('Reduce of empty matrix with no initial value.');

    var i = 0,
        value = initialValue != null ? initialValue : this.data[i++];

    for (; i < l; i++)
      value = callback.call(this, value, this.data[i], i, this.data);
    return value;
  }

  /**
   * Converts current vector into a readable formatted string.
   * @memberof Vector
   * @returns {String} a string of the vector's contents
   **/
  toString() {
    var result = ['['],
        i = 0;
    
    if (i < this.length)
      result.push(this.data[i++]);
    while (i < this.length)
      result.push(', ' + this.data[i++]);
    
    result.push(']');

    return result.join('');
  }

  /**
   * Converts current vector into a JavaScript array.
   * @memberof Vector
   * @returns {Array} an array containing all elements of current vector
   **/
  toArray() {
    if (!this.data)
      return [];

    return [].slice.call(this.data);
  }
}

module.exports = Vector;
try {
  window.Vector = Vector;
} catch (e) {}
