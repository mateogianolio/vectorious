(function() {
  'use strict';
  
  var Vector = require('./vector.js');
  
  function Matrix() {
    var self = this;
    self.rows = [];
    
    [].slice.call(arguments, 0)
      .forEach(function(argument) {
        var i;
        if(argument instanceof Vector) {
          self.rows.push(argument);
        } else if(typeof argument === 'number') {
          for(i = 0; i < argument; i++)
            self.rows.push(new Vector().zeros(argument));
        } else if(typeof argument === 'object') {
          for(i = 0; i < argument.length; i++)
            self.rows.push(Vector.construct(argument[i]));
        }
      });
  }
  
  /****************************\
  | Methods returning matrices |
  \****************************/
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
  
  Matrix.prototype.normalize = function() {
    return this.scale(1 / this.length);
  };
  
  Matrix.prototype.zeros = function(x, y) {
    for(var i = 0; i < y; i++)
      if(this.rows[i] === undefined)
        this.rows[i] = new Vector().zeros(x);
    
    return this;
  };
  
  Matrix.prototype.ones = function(x, y) {
    for(var i = 0; i < y; i++)
      if(this.rows[i] === undefined)
        this.rows[i] = new Vector().ones(x);
    
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
    var copy = new Matrix().zeros(this.rows[0].length, this.rows.length);
    var i, j;
    for(i = 0; i < this.rows.length; i++)
      for(j = 0; j < this.rows[0].length; j++)
        copy.set(j, i, this.get(i, j));
    
    return copy;
  };
  
  Matrix.prototype.gauss = function() {
    var copy,
        argmax,
        max,
        scalar,
        i, j, k;
    for(k = 0; k < Math.min(this.rows.length, this.rows[0].length); k++) {
      argmax = 0;
      max = 0;
      
      for(i = k; i < this.rows.length; i++) {
        copy = Math.abs(this.get(k, i));
        if(copy > max) {
          argmax = i;
          max = copy;
        }
      }
      
      if(this.get(argmax, k) === 0)
        throw 'Error: matrix is singular!';
      
      copy = this.rows[k];
      this.rows[k] = this.rows[argmax];
      this.rows[argmax] = copy;
      
      // swapping two rows multiplies the determinant by -1
      if(k !== argmax)
        this.d *= -1;
      
      for(i = k + 1; i < this.rows.length; i++) {
        for(j = k + 1; j < this.rows[0].length; j++) {
          scalar = this.get(i, k) / this.get(k, k);
          
          // multiplying a row by a non-zero scalar multiplies the determinant by the same scalar
          if(scalar !== 0)
            this.d *= scalar;
          
          this.set(i, j, this.get(i, j) - this.get(k, j) * scalar);
        }
        this.set(i, k, 0);
      }
    }
    
    return Matrix.construct(this.rows);
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
  
  /***************************\
  | Methods returning vectors |
  \***************************/
  Matrix.prototype.diag = function() {
    var elements = [],
        i, j;
    
    for(i = 0; i < this.rows.length; i++)
      for(j = 0; j < this.rows[0].length; j++)
        if(i === j)
          elements.push(this.get(i, j));
    
    return Vector.construct(elements);
  };
  
  /***************************\
  | Methods returning scalars |
  \***************************/
  Matrix.prototype.trace = function() {
    return Matrix.construct(this.diag().values.reduce(function(previous, current) {
      return previous + current;
    }));
  };
      
  /***********\
  | Get & set |
  \***********/
  Matrix.prototype.get = function(i, j) {
    return this.rows[i].get(j);
  };
      
  Matrix.prototype.set = function(i, j, value) {
    this.rows[i].set(j, value);
    return this;
  };
  
  /*********\
  | Display |
  \*********/
  Matrix.prototype.toString = function() {
    return '[' + this.rows.map(function(vector) {
      return vector.toString();
    }).join(', \n') + ']';
  };
  
  module.exports = Matrix;
})();