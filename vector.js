(function () {
  'use strict';

  /**
   * @module Vector
   * @name Vector
   * @desc Creates a `Vector` from the supplied arguments.
   * ```javascript
   * $ node
   * > var v = require('vectorious');
   *
   * > new v.Vector(1, 2, 3);
   * Vector {
   *   type: [Function: Float64Array],
   *   length: 3,
   *   buffer: ArrayBuffer {},
   *   values: Float64Array { '0': 1, '1': 2, '2': 3 } }
   *
   * > new v.Vector(Float32Array, 1, 2, 3);
   * Vector {
   *   type: [Function: Float32Array],
   *   length: 3,
   *   buffer: ArrayBuffer {},
   *   values: Float32Array { '0': 1, '1': 2, '2': 3 } }
   *
   * > new v.Vector([1, 2, 3]);
   * Vector {
   *   type: [Function: Float64Array],
   *   length: 3,
   *   buffer: ArrayBuffer {},
   *   values: Float64Array { '0': 1, '1': 2, '2': 3 } }
   * ```
   **/

  var memcpy = require('./memcpy'),
      nblas = require('nblas');

  Function.prototype.construct = function (args) {
    var object = Object.create(this.prototype);
    this.apply(object, args);
    return object;
  };

  /**
   * @method constructor
   * @desc Creates a two-dimensional `Vector` from the supplied arguments.
   **/
  function Vector () {
    var self = this;
    self.type = Float64Array;
    self.length = 0;

    var argument,
        i;
    for (i = 0; i < arguments.length; i++) {
      argument = arguments[i];

      if (argument instanceof Vector) {
        self.combine(argument);
      } else if (argument.buffer && argument.buffer &&
        Object.prototype.toString.call(argument.buffer) === '[object ArrayBuffer]') {
        self.buffer = argument.buffer;
        self.values = argument;
        self.length = argument.length;
        self.type = argument.constructor;
      } else if (typeof argument === 'object') {
        self.combine(Vector.construct(argument));
      } else if (typeof argument === 'function') {
        self.type = argument;
      } else
        self.push(argument);
    }

    return self;
  }

  /**
   * Static method. Adds two vectors `a` and `b` together.
   * @param {Vector} a -
   * @param {Vector} b -
   * @returns {Vector} a vector containing the sum of `a` and `b`
   **/
  Vector.add = function (a, b) {
    return new Vector(a).add(b);
  };

  /**
   * Adds `vector` to the current vector.
   * @param {Vector} vector -
   * @returns {Vector} this
   **/
  Vector.prototype.add = function (vector) {
    if (this.length !== vector.length)
      throw new Error('sizes do not match!');

    if (!this.length && !vector.length)
      return this;

    if (this.type === Float64Array)
      nblas.daxpy(this.length, 1, vector.values, 1, this.values, 1);
    else if (this.type === Float32Array)
      nblas.saxpy(this.length, 1, vector.values, 1, this.values, 1);
    else {
      for (var i = 0; i < this.length; i++)
        this.values[i] += vector.values[i];
    }

    return this;
  };

  /**
   * Static method. Subtracts the vector `b` from vector `a`.
   * @param {Vector} a -
   * @param {Vector} b -
   * @returns {Vector} a vector containing the difference between `a` and `b`
   **/
  Vector.subtract = function (a, b) {
    return new Vector(a).subtract(b);
  };

  /**
   * Subtracts `vector` from the current vector.
   * @param {Vector} vector -
   * @returns {Vector} this
   **/
  Vector.prototype.subtract = function (vector) {
    if (this.length !== vector.length)
      throw new Error('sizes do not match');

    if (!this.length && !vector.length)
      return this;

    if (this.type === Float64Array)
      nblas.daxpy(this.length, -1, vector.values, 1, this.values, 1);
    else if (this.type === Float32Array)
      nblas.saxpy(this.length, -1, vector.values, 1, this.values, 1);
    else {
      var i;
      for (i = 0; i < this.length; i++)
        this.values[i] += vector.values[i];
    }

    return this;
  };

  /**
   * Static method. Multiplies all elements of `vector` with a specified `scalar`.
   * @param {Vector} vector -
   * @param {Number} scalar -
   * @returns {Vector} a resultant scaled vector
   **/
  Vector.scale = function (vector, scalar) {
    return new Vector(vector).scale(scalar);
  };

  /**
   * Multiplies all elements of current vector with a specified `scalar`.
   * @param {Number} scalar -
   * @returns {Vector} this
   **/
  Vector.prototype.scale = function (scalar) {
    if (this.type === Float64Array)
      nblas.dscal(this.length, scalar, this.values, 1);
    else if (this.type === Float32Array)
      nblas.sscal(this.length, scalar, this.values, 1);
    else {
      var i;
      for (i = this.length - 1; i >= 0; i--)
        this.values[i] *= scalar;
    }

    return this;
  };

  /**
   * Static method. Normalizes `vector`, i.e. divides all elements with the magnitude.
   * @param {Vector} vector -
   * @returns {Vector} a resultant normalized vector
   **/
  Vector.normalize = function (vector) {
    return new Vector(vector).normalize();
  };

  /**
   * Normalizes current vector.
   * @returns {Vector} a resultant normalized vector
   **/
  Vector.prototype.normalize = function () {
    return this.scale(1 / this.magnitude());
  };

  /**
   * Static method. Projects the vector `a` onto the vector `b` using
   * the projection formula `(b * (a * b / b * b))`.
   * @param {Vector} a -
   * @param {Vector} b -
   * @returns {Vector} a new resultant projected vector
   **/
  Vector.project = function (a, b) {
    return a.project(new Vector(b));
  };

  /**
   * Projects the current vector onto `vector` using
   * the projection formula `(b * (a * b / b * b))`.
   * @param {Vector} vector -
   * @returns {Vector} `vector`
   **/
  Vector.prototype.project = function (vector) {
    return vector.scale(this.dot(vector) / vector.dot(vector));
  };

  /**
   * Static method. Creates a vector containing zeros (`0`) of `count` size, takes
   * an optional `type` argument which should be an instance of `TypedArray`.
   * @param {Number} count -
   * @param {TypedArray} type -
   * @returns {Vector} a new vector of the specified size and `type`
   **/
  Vector.zeros = function (count, type) {
    if (count < 0)
      throw new Error('invalid size');
    else if (count === 0)
      return new Vector();

    type = type ? type : Float64Array;
    var data = new type(count),
        i;
    if (data.fill)
      data.fill(+0.0);
    else {
      for (i = 0; i < count; i++)
        data[i] = +0.0;
    }

    return new Vector(data);
  };

  /**
   * Static method. Creates a vector containing ones (`1`) of `count` size, takes
   * an optional `type` argument which should be an instance of `TypedArray`.
   * @param {Number} count -
   * @param {TypedArray} type -
   * @returns {Vector} a new vector of the specified size and `type`
   **/
  Vector.ones = function (count, type) {
    if (count < 0)
      throw new Error('invalid size');
    else if (count === 0)
      return new Vector();

    type = type ? type : Float64Array;
    var data = new type(count),
        i;
    if (data.fill)
      data.fill(1.0);
    else {
      for (i = 0; i < count; i++)
        data[i] = 1;
    }

    return new Vector(data);
  };

  /**
   * Static method. Creates a vector containing a range (can be either ascending or descending)
   * of numbers specified by the arguments provided (e.g. `Vector.range(0, .5, 2)`
   * gives a vector containing all numbers in the interval `[0, 2)` separated by
   * steps of `0.5`), takes an optional `type` argument which should be an instance of
   * `TypedArray`.
   * @param {Number} start -
   * @param {Number} step - optional
   * @param {Number} end -
   * @returns {Vector} a new vector containing the specified range of the specified `type`
   **/
  Vector.range = function () {
    var args = [].slice.call(arguments, 0),
        backwards = false,
        start, step, end;

    var type = Float64Array;
    if (typeof args[args.length - 1] === 'function')
      type = args.pop();

    switch(args.length) {
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

    var vector = Vector.zeros(Math.ceil((end - start) / step), type),
        i, j;
    for (i = start, j = 0; i < end; i += step, j++)
      vector.values[j] = backwards ? end - i + start : i;

    return vector;
  };

  /**
   * Static method. Performs dot multiplication with two vectors `a` and `b`.
   * @param {Vector} a -
   * @param {Vector} b -
   * @returns {Number} the dot product of the two vectors
   **/
  Vector.dot = function (a, b) {
    return a.dot(b);
  };

  /**
   * Performs dot multiplication with current vector and `vector`
   * @param {Vector} vector -
   * @returns {Number} the dot product of the two vectors
   **/
  Vector.prototype.dot = function (vector) {
    if (this.length !== vector.length)
      throw new Error('sizes do not match');

    var a = this.values,
        b = vector.values;

    if (this.type === Float64Array)
      return nblas.ddot(this.length, a, 1, b, 1);
    else if (this.type === Float32Array)
      return nblas.sdot(this.length, a, 1, b, 1);

    var result = 0,
        i, l;

    for (i = 0, l = this.length; i < l; i++)
      result += a[i] * b[i];

    return result;
  };

  /**
   * Calculates the magnitude of a vector (also called L2 norm or Euclidean length).
   * @returns {Number} the magnitude (L2 norm) of the vector
   **/
  Vector.prototype.magnitude = function () {
    if (!this.length)
      return 0;

    if (this.type === Float64Array)
      return nblas.dnrm2(this.length, this.values, 1);
    else if (this.type === Float32Array)
      return nblas.snrm2(this.length, this.values, 1);

    var result = 0,
        values = this.values,
        i, l;
    for (i = 0, l = this.length; i < l; i++)
      result += values[i] * values[i];

    return Math.sqrt(result);
  };

  /**
   * Static method. Determines the angle between two vectors `a` and `b`.
   * @param {Vector} a -
   * @param {Vector} b -
   * @returns {Number} the angle between the two vectors in radians
   **/
  Vector.angle = function (a, b) {
    return a.angle(b);
  };

  /**
   * Determines the angle between the current vector and `vector`.
   * @param {Vector} vector -
   * @returns {Number} the angle between the two vectors in radians
   **/
  Vector.prototype.angle = function (vector) {
    return Math.acos(this.dot(vector) / this.magnitude() * vector.magnitude());
  };

  /**
   * Static method. Checks the equality of two vectors `a` and `b`.
   * @param {Vector} a -
   * @param {Vector} b -
   * @returns {Boolean} `true` if the two vectors are equal, `false` otherwise
   **/
  Vector.equals = function (a, b) {
    return a.equals(b);
  };

  /**
   * Checks the equality of the current vector and `vector`.
   * @param {Vector} vector -
   * @returns {Boolean} `true` if the two vectors are equal, `false` otherwise
   **/
  Vector.prototype.equals = function (vector) {
    if (this.length !== vector.length)
      return false;

    var a = this.values,
        b = vector.values,
        i = 0, l = this.length;

    while(i < l && a[i] === b[i]) { i++; }

    return i === l;
  };

  /**
   * Gets the element at `index` from current vector.
   * @param {Number} index -
   * @returns {Number} the element at `index`
   **/
  Vector.prototype.get = function (index) {
    if (index < 0 || index > this.length - 1)
      throw new Error('index out of bounds');

    return this.values[index];
  };

  /**
   * Gets the minimum value (smallest) element of current vector.
   * @returns {Number} the smallest element of the current vector
   **/
  Vector.prototype.min = function () {
    var min = Number.POSITIVE_INFINITY,
        values = this.values,
        value,
        i, l;

    for (i = 0, l = values.length; i < l; i++) {
      value = values[i];
      if (value < min)
        min = value;
    }

    return min;
  };

  /**
   * Gets the maximum value (largest) element of current vector.
   * @returns {Number} the largest element of current vector
   **/
  Vector.prototype.max = function () {
    if (this.type === Float64Array)
      return this.values[nblas.idamax(this.length, this.values, 1)];
    else if (this.type === Float32Array)
      return this.values[nblas.isamax(this.length, this.values, 1)];

    var max = Number.NEGATIVE_INFINITY,
        values = this.values,
        value,
        i, l;

    for (i = 0, l = this.length; i < l; i++) {
      value = values[i];
      if (value > max)
        max = value;
    }

    return max;
  };

  /**
   * Sets the element at `index` to `value`.
   * @param {Number} index -
   * @param {Number} value -
   * @returns {Vector} this
   **/
  Vector.prototype.set = function (index, value) {
    if (index < 0 || index > this.length - 1)
      throw new Error('index out of bounds');

    this.values[index] = value;
    return this;
  };

  /**
   * Static method. Combines two vectors `a` and `b` (appends `b` to `a`).
   * @param {Vector} a -
   * @param {Vector} b -
   * @returns {Vector} `b` appended to vector `a`
   **/
  Vector.combine = function (a, b) {
    return new Vector(a).combine(b);
  };

  /**
   * Combines the current vector with `vector`
   * @param {Vector} vector
   * @returns {Vector} `vector` combined with current vector
   **/
  Vector.prototype.combine = function (vector) {
    if (!vector.length)
      return this;
    else if (!this.length) {
      this.buffer = new ArrayBuffer(vector.buffer.byteLength);
      this.type = vector.type;
      memcpy(this.buffer, vector.buffer);
      this.values = new this.type(this.buffer);
      this.length = this.values.length;
      return this;
    }

    var buffer = new ArrayBuffer(this.buffer.byteLength + vector.buffer.byteLength);
    memcpy(buffer, this.buffer);
    memcpy(buffer, this.buffer.byteLength, vector.buffer);

    this.buffer = buffer;
    this.values = new this.type(this.buffer);
    this.length = this.values.length;

    return this;
  };

  /**
   * Pushes a new `value` into current vector.
   * @param {Number} value -
   * @returns {Vector} `this`
   **/
  Vector.prototype.push = function (value) {
    if (!(this.values instanceof this.type)) {
      this.buffer = new ArrayBuffer(this.type.BYTES_PER_ELEMENT);
      this.values = new this.type(this.buffer);
      this.values[0] = value;
    } else {
      var l = this.buffer.byteLength,
          buffer = new ArrayBuffer(l + this.type.BYTES_PER_ELEMENT);

      memcpy(buffer, this.buffer);
      var values = new this.type(buffer);
      values[this.length] = value;

      this.buffer = buffer;
      this.values = values;
    }

    this.length++;
    return this;
  };

  /**
   * Maps a function `callback` to all elements of current vector.
   * @param {Function} callback -
   * @returns {Vector} `this`
   **/
  Vector.prototype.map = function (callback) {
    var i;
    for (i = 0; i < this.length; i++)
      this.values[i] = callback(this.values[i]);

    return this;
  };

  /**
   * Functional version of for-looping the vector, is equivalent
   * to `Array.prototype.forEach`.
   * @param {Function} callback -
   * @returns {Vector} `this`
   **/
  Vector.prototype.each = function (callback) {
    var i;
    for (i = 0; i < this.length; i++)
      callback(this.values[i], i);

    return this;
  };

  /**
   * Converts current vector into a readable formatted string.
   * @returns {String} a string of the vector's contents
   **/
  Vector.prototype.toString = function () {
    var result = '',
        i;
    for (i = 0; i < this.length; i++)
      result += i > 0 ? ', ' + this.values[i] : this.values[i];

    return '[' + result + ']';
  };

  /**
   * Converts current vector into a JavaScript array.
   * @returns {Array} an array containing all elements of current vector
   **/
  Vector.prototype.toArray = function () {
    if (!this.values)
      return [];

    return Array.prototype.slice.call(this.values);
  };

  module.exports = Vector;
})();
