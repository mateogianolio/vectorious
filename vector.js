(function() {
  'use strict';
  
  function Vector() {
    var self = this;
    self.values = [];
    self.length = 0;

    // Opt 1
    //  1 Stopping making new array and slicing arguments into it
    //  2 Using for loop rather than .forEach(fn)

    /*
    
    [].slice.call(arguments, 0)
      .forEach(function(argument) {
        if(argument instanceof Vector)
          self = argument;
        else {
          self.push(argument);
          self.length = self.values.length;
        }
      });

    */
    var argument;

    for (var c = 0, l = arguments.length; c < l; c++) {
      argument = arguments[c];
      if(argument instanceof Vector)
        self = argument;
      else {
        self.push(argument);
        self.length = self.values.length;
      }
    }
    
    return self;
  }
  
  // array of arguments to function arguments (e.g. f.construct([a, b, c]) => f(a, b, c))
  Function.prototype.construct = function(args) {
    var object = Object.create(this.prototype);
    this.apply(object, args);
    return object;
  };
  
  Vector.prototype.add = function(vector) {
    if(this.length !== vector.length)
      throw 'Error: sizes do not match!';

    // Opt 2
    //  Using for loop instead of map. Caching values arrays.
    
    var res = new Vector();
    var my_vals = this.values, its_vals = vector.values;

    for (var c = 0, l = this.length; c < l; c++) {
      res.push(my_vals[c] + its_vals[c]);
    };
    return res;
  };
  
  Vector.prototype.subtract = function(vector) {
    if(this.length !== vector.length)
      throw 'Error: sizes do not match!';

    // Opt 3
    //  Using for loop instead of map. Caching values arrays.
    
    var res = new Vector();
    var my_vals = this.values, its_vals = vector.values;

    for (var c = 0, l = this.length; c < l; c++) {
      res.push(my_vals[c] - its_vals[c]);
    };
    return res;
  };

  
  Vector.prototype.scale = function(scalar) {
    var res = new Vector();
    var my_vals = this.values;

    // Opt 4
    //  Using for loop instead of map. Caching values array.

    for (var c = 0, l = this.length; c < l; c++) {
      res.push(my_vals[c] * scalar);
    };
    return res;
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
  
  Vector.prototype.range = function() {
    var args = [].slice.call(arguments, 0),
        start, step, end;
    
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
        throw 'Error: invalid range!';
    }
    
    if(end - start < 0) {
      var copy = end;
      end = start;
      start = copy;
    }
    
    if(step > end - start)
      throw 'Error: invalid range!';
    
    var i;
    for(i = start; i < end - step; i += step)
      this.push(i);
    
    return Vector.construct(this.values);
  };

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

  Vector.prototype.get = function(index) {
    return this.values[index];
  };
  
  Vector.prototype.min = function() {
    var min;
    this.each(function(value, index) {
      if(!min)
        min = value;
      else
        min = value < min ? value : min;
    });
    
    return min;
  };
  
  Vector.prototype.max = function() {
    var max;
    this.each(function(value, index) {
      if(!max)
        max = value;
      else
        max = value > max ? value : max;
    });
    
    return max;
  };
  
  Vector.prototype.set = function(index, value) {
    this.values[index] = value;
    return this;
  };
  
  Vector.prototype.combine = function(vector) {
    var self = this;
    vector.values.forEach(function(value) {
      self.push(value);
    });
    
    return this;
  };
  
  Vector.prototype.push = function(value) {
    this.values.push(value);
    this.length++;
    return this;
  };
  
  Vector.prototype.map = function(callback) {
    return Vector.construct(this.values.map(function(value) {
      return callback(value);
    }));
  };
  
  Vector.prototype.each = function(callback) {
    this.values.forEach(function(value, index) {
      callback(value, index);
    });
    
    return this;
  };

  Vector.prototype.toString = function() {
    return '[' + this.values.join(', ') + ']';
  };
  
  Vector.prototype.toArray = function() {
    return this.values;
  };
  
  module.exports = Vector;
})();