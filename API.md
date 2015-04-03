#####Vector
######Instance Methods

Method Name           | Arguments                 | Return Value            | Description
----------------------|---------------------------|-------------------------|------------
add                   | (vector)                  | new Vector              | Adds `vector` to `this`, returns resultant Vector
subtract              | (vector)                  | new Vector              | Subtracts `vector` from `this`, returns resultant Vector
scale                 | (number)                  | new Vector              | Scales `this` by `number` factor, returns resultant Vector
normalize             | ()                        | new Vector              |
dot                   | (vector)                  | new Vector              |
magnitude             | ()                        | number                  |
angle                 | ()                        | number                  |
project               | (vector)                  | new Vector              |
equals                | (vector)                  | boolean                 |
get                   | (number)                  | number                  |
min                   | ()                        | number                  | Finds and returns the minumum value
max                   | ()                        | number                  | Finds and returns the maximum value
set                   | (number, number)          | this Vector             |
combine               | (vector)                  | this Vector             |
push                  | (number)                  | this Vector             |
map                   | (callback)                |                         |
each                  |                           |                         |
toString              | ()                        | string                  |
toArray               | ()                        | new Array               |

######Static Methods

Method Name           | Arguments                 | Return Value            | Description
----------------------|---------------------------|-------------------------|-------------
range                 | (start, [step,]  end)     | new Vector              | Returns a Vector containing a range of numbers, starting with `start`, varying by `step`, and up to but not including `end`
zeros                 | (count)                   | new Vector              | Returns a Vector with each value set to `0`
ones                  | (count)                   | new Vector              | Returns a Vector with each value set to `1`
