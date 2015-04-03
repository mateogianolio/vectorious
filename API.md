#####Vector
######Instance Methods

Method Name           | Arguments                 | Return Value            | Description
----------------------|---------------------------|-------------------------|------------
add                   | (vector)                  | new vector              | Adds `vector` to `this`, returns resultant Vector
subtract              | (vector)                  | new vector              | Subtracts `vector` from `this`, returns resultant Vector
scale                 | (number)                  | new vector              | Scales `this` by `number` factor, returns resultant Vector
normalize             | ()                        | new vector              |
dot                   | (vector)                  | new vector              |
magnitude             | ()                        | number                  |
angle                 | ()                        | number                  |
project               | (vector)                  | new vector              |
equals                | (vector)                  | boolean                 |
get                   | (number)                  | number                  |
min                   | ()                        | number                  | Finds and returns the minumum value
max                   | ()                        | number                  | Finds and returns the maximum value
set                   | (number, number)          | this vector             |
combine               | (vector)                  | this vector             |
push                  | (number)                  | this vector             |
map                   | (callback)                |                         |
each                  |                           |                         |
toString              | ()                        | string                  |
toArray               | ()                        | new array               |

######Static Methods

Method Name           | Arguments                 | Return Value            | Description
----------------------|---------------------------|-------------------------|-------------
range                 | (start, [step,]  end)     | new vector              | Returns a Vector containing a range of numbers, starting with `start`, varying by `step`, and up to but not including `end`
zeros                 | (count)                   | new vector              | Returns a Vector with each value set to `0`
ones                  | (count)                   | new vector              | Returns a Vector with each value set to `1`