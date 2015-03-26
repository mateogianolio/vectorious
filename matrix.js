(function() {
  'use strict';
  
  var Vector = require('./vector.js');
  
  function Matrix() {
    var self = this;
    self.rows = [];
    
    [].slice.call(arguments, 0)
      .forEach(function(argument) {
        var i;
        if(argument instanceof Matrix) {
          self = argument;
        } else if(argument instanceof Vector) {
          self.rows.push(argument);
        } else if(typeof argument === 'number') {
          for(i = 0; i < argument; i++)
            self.rows.push(new Vector().zeros(argument));
        } else if(typeof argument === 'object') {
          for(i = 0; i < argument.length; i++) {
            if(argument[i] instanceof Vector)
              self.rows.push(argument[i]);
            else
              self.rows.push(Vector.construct(argument[i]));
          }
        }
      });
    
    return self;
  }

  Matrix.prototype.add = function(matrix) {
    return Matrix.construct(this.rows.map(function(vector, index) {
      return vector.add(matrix.rows[index]);
    }));
  };
  
  Matrix.prototype.subtract = function(matrix) {
    return Matrix.construct(this.rows.map(function(vector, index) {
      return vector.subtract(matrix.rows[index]);
    }));
  };
  
  Matrix.prototype.scale = function(scalar) {
    return Matrix.construct(this.rows.map(function(vector) {
      return vector.scale(scalar);
    }));
  };
  
  Matrix.prototype.zeros = function(i, j) {
    for(var row = 0; row < i; row++)
      this.rows[row] = new Vector().zeros(j);
    
    return this;
  };
  
  Matrix.prototype.ones = function(i, j) {
    for(var row = 0; row < i; row++)
      this.rows[row] = new Vector().ones(j);
    
    return this;
  };
  
  Matrix.prototype.multiply = function(matrix) {
    if(this.rows[0].length !== matrix.rows.length)
      throw 'Error: sizes do not match!';
    
    var copy = new Matrix().zeros(this.rows.length, matrix.rows[0].length);
    
    var sum = 0;
    for(var i = 0; i < this.rows.length; i++) {
      for(var j = 0; j < matrix.rows[0].length; j++) {
        sum = 0;
        for(var k = 0; k < this.rows[0].length; k++)
          sum += this.get(i, k) * matrix.get(k, j);
        
        copy.set(i, j, sum);
      }
    }
    
    return copy;
  };
  
  Matrix.prototype.transpose = function() {
    var matrix = new Matrix().zeros(this.rows[0].length, this.rows.length);
    var i, j;
    for(i = 0; i < this.rows.length; i++)
      for(j = 0; j < this.rows[0].length; j++)
        matrix.set(j, i, this.get(i, j));
    
    return matrix;
  };
  
  Matrix.prototype.gauss = function(reduce) {
    var n = Math.min(this.rows.length, this.rows[0].length),
        copy,
        argmax,
        max,
        i, j, k;
    
    for(k = 0; k < n; k++) {
      argmax = 0;
      max = 0;
      
      for(i = k; i < n; i++) {
        copy = Math.abs(this.get(k, i));
        if(copy > max) {
          argmax = i;
          max = copy;
        }
      }
      
      if(this.get(argmax, k) === 0)
        throw 'Error: this is singular!';
      
      this.swap(k, argmax);
      
      for(i = k + 1; i < n; i++) {
        for(j = k + 1; j < n; j++)
          this.set(i, j, this.get(i, j) - this.get(k, j) * (this.get(i, k) / this.get(k, k)));
          
        this.set(i, k, 0);
      }
    }
    
    if(reduce) {
      var pivot = 0;
      
      for(k = this.rows.length - 1; k >= 0; k--) {
        for(i = 0; i < this.rows[0].length; i++) {
          copy = this.get(k, i);

          if(!pivot && copy !== 0)
            pivot = copy;
        }

        if(k > 0)
          this.rows[k - 1] = this.rows[k - 1].scale(1 / pivot);
        
        this.rows[k] = this.rows[k].scale(1 / pivot);

        pivot = 0;
      }
    }
    
    return this;
  };

  Matrix.prototype.augment = function(matrix) {
    if(this.rows.length !== matrix.rows.length)
      throw 'Error: sizes do not match!';
    
    return Matrix.construct(this.rows.map(function(vector, index) {
      return vector.combine(matrix.rows[index]);
    }));
  };
  
  Matrix.prototype.identity = function(size) {
    var matrix = new Matrix().zeros(size, size),
        i, j;
    for(i = 0; i < size; i++)
      for(j = 0; j < size; j++)
        if(i === j)
          matrix.set(i, j, 1);
    
    return matrix;
  };

  Matrix.prototype.diag = function() {
    var elements = [],
        i, j;
    
    for(i = 0; i < this.rows.length; i++)
      for(j = 0; j < this.rows[0].length; j++)
        if(i === j)
          elements.push(this.get(i, j));
    
    return Vector.construct(elements);
  };

  Matrix.prototype.trace = function() {
    return Matrix.construct(this.diag().values.reduce(function(previous, current) {
      return previous + current;
    }));
  };

  Matrix.prototype.equals = function(matrix) {
    return this.rows
      .map(function(vector, index) {
        return vector.equals(matrix.rows[index]);
      })
      .reduce(function(previous, current) {
        return previous === current;
      });
  };

  Matrix.prototype.get = function(i, j) {
    return this.rows[i].get(j);
  };
      
  Matrix.prototype.set = function(i, j, value) {
    this.rows[i].set(j, value);
    return this;
  };
  
  Matrix.prototype.swap = function(i, j) {
    if(!this.rows[i].length || !this.rows[j].length)
      throw 'Error: index out of bounds';
    
    var copy = this.rows[i];
    this.rows[i] = this.rows[j];
    this.rows[j] = copy;
    
    return this;
  };
  
  Matrix.prototype.map = function(callback) {
    return Matrix.construct(this.rows.map(function(vector) {
      return vector.map(callback);
    }));
  };
  
  Matrix.prototype.each = function(callback) {
    this.rows.forEach(function(vector, index) {
      callback(vector, index);
    });
    
    return this;
  };
  
  Matrix.prototype.toString = function() {
    return '[' + this.rows.map(function(vector) {
      return vector.toString();
    }).join(', \n') + ']';
  };
  
  Matrix.prototype.toArray = function() {
    return this.rows.map(function(vector) {
      return vector.toArray();
    });
  };
  
  module.exports = Matrix;
})();