(function() {
  'use strict';
  
  function Vector() {
    var self = this;
    self.values = [];
    self.length = 0;
    
    [].slice.call(arguments, 0)
      .forEach(function(argument) {
        self.values.push(argument);
        self.length++;
      });
  }
  
  // ([a, b, c]) => (a, b, c)
  Function.prototype.construct = function(args) {
    var object = Object.create(this.prototype);
    this.apply(object, args);
    return object;
  };
  
  /***************************\
  | Methods returning vectors |
  \***************************/
  Vector.prototype.add = function(vector) {
    if(this.length !== vector.length)
      throw 'Error: sizes do not match!';
    
    return Vector.construct(this.values.map(function(value, index) {
      return value + vector.values[index];
    }));
  };
  
  Vector.prototype.subtract = function(vector) {
    if(this.length !== vector.length)
      throw 'Error: sizes do not match!';
    
    return Vector.construct(this.values.map(function(value, index) {
      return value - vector.values[index];
    }));
  };
  
  Vector.prototype.scale = function(scalar) {
    return Vector.construct(this.values.map(function(value) {
      return value * scalar;
    }));
  };
  
  Vector.prototype.normalize = function() {
    return this.scale(1 / this.length);
  };
  
  Vector.prototype.project = function(vector) {
    return Vector.construct(
      vector
        .normalize()
        .scale(this.magnitude() * Math.cos(this.dot(vector) / (this.magnitude() * vector.magnitude())))
    );
  };
  
  Vector.prototype.zeros = function(count) {
    this.values = Array
      .apply(null, new Array(count))
      .map(Number.prototype.valueOf, 0);
    this.length = count;
    return this;
  };
  
  Vector.prototype.ones = function(count) {
    this.values = Array
      .apply(null, new Array(count))
      .map(Number.prototype.valueOf, 1);
    this.length = count;
    return this;
  };
  
  /***************************\
  | Methods returning scalars |
  \***************************/
  Vector.prototype.dot = function(vector) {
    if(this.length !== vector.length)
      throw 'Error: sizes do not match!';
    
    return this.values
      .map(function(value, index) {
        return value * vector.values[index];
      })
      .reduce(function(previous, current) {
        return previous + current;
      });
  };
  
  Vector.prototype.magnitude = function() {
    return Math.sqrt(this.values
      .map(function(value) {
        return value * value;
      })
      .reduce(function(previous, current) {
        return previous + current;
      })
    );
  };
  
  Vector.prototype.angle = function(vector) {
    return Math.acos(this.dot(vector) / this.magnitude() * vector.magnitude());
  };
  
  /**********\
  | Equality |
  \**********/
  Vector.prototype.equals = function(vector) {
    if(this.length !== vector.length)
      return false;
    
    return this.values
      .map(function(value, index) {
        return value === vector.values[index];
      })
      .reduce(function(previous, current) {
        return previous === current;
      });
  };
  
  /***********\
  | Get & set |
  \***********/
  Vector.prototype.get = function(index) {
    return this.values[index];
  };
  
  Vector.prototype.set = function(index, value) {
    this.values[index] = value;
    return this;
  };
  
  Vector.prototype.append = function(vector) {
    var self = this;
    vector.values.forEach(function(value) {
      self.values.push(value);
      self.length++;
    });
    
    return this;
  };
  
  /*********\
  | Display |
  \*********/
  Vector.prototype.toString = function() {
    return '[' + this.values.join(', ') + ']';
  };
  
  module.exports = Vector;
})();