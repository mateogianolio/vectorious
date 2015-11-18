(function() {
  'use strict';

  module.exports = function (target, targetStart, source, sourceStart, sourceEnd) {
      if (typeof targetStart === 'object') {
          sourceEnd = sourceStart;
          sourceStart = source;
          source = targetStart;
          targetStart = 0;
      }
      sourceStart = sourceStart || 0;

      var i, j, k, l;

      if (target instanceof Buffer) {

          // Buffer source -> Buffer target (the binding is a tiny bit faster)
          if (source instanceof Buffer) {
              sourceEnd = sourceEnd || source.length;
              l = sourceEnd - sourceStart;
              if (targetStart + l > target.length)
                  throw Error("illegal source range: target capacity overrun");
              source.copy(target, targetStart, sourceStart, sourceEnd);

              // ArrayBuffer source -> Buffer target (the binding is about 45 times faster)
          } else if (source instanceof ArrayBuffer) {
              sourceEnd = sourceEnd || source.byteLength;
              l = sourceEnd - sourceStart;
              if (targetStart + l > target.length)
                  throw Error("Buffer overrun");
              for (i = sourceStart, j = targetStart, k = new Uint8Array(source); i < sourceEnd; ++i, ++j)
                  target[j] = k[i];
          } else
              throw Error("illegal source: not an ArrayBuffer or Buffer");

      } else if (target instanceof ArrayBuffer) {

          // Buffer source -> ArrayBuffer target (the binding is about 45 times faster)
          if (source instanceof Buffer) {
              sourceEnd = sourceEnd || source.length;
              l = sourceEnd - sourceStart;
              if (targetStart + l > target.byteLength)
                  throw Error("buffer overrun");
              for (i = sourceStart, j = targetStart, k = new Uint8Array(target); i < sourceEnd; ++i, ++j)
                  k[j] = source[i];

              // ArrayBuffer source -> ArrayBuffer target (the binding is up to about 75 times faster)
          } else if (source instanceof ArrayBuffer) {
              sourceEnd = sourceEnd || source.byteLength;
              l = sourceEnd - sourceStart;
              if (targetStart + l > target.byteLength)
                  throw Error("buffer overrun");
              for (i = sourceStart, j = targetStart, k = new Uint8Array(target), l = new Uint8Array(source); i < sourceEnd; ++i, ++j)
                  k[j] = l[i];
              l = sourceEnd - sourceStart;
          } else
              throw Error("illegal source: not an ArrayBuffer or Buffer");

      } else
          throw Error("illegal target: not an ArrayBuffer or Buffer");

      return l;
  };
}());
