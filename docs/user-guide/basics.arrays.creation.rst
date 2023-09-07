.. basics.arrays.creation

Array creation
==============

Constructor
***********

Constructor
-----------

.. code-block:: typescript

  import v from 'vectorious';

  new v([1, 2, 3, 4]);
  // [1, 2, 3, 4]

  new v(new Float32Array([1, 2, 3, 4]));

Array
-----

The shorthand `array` method:

.. code-block:: typescript

  import { array } from 'vectorious';

  array([1, 2, 3, 4]);

  // [1, 2, 3, 4]

  array(new Int8Array([1, 2, 3, 4]));
  // [0, 0, 0, 0] (dtype: 'int8')

Matrix
------

Matrix creation

.. code-block:: typescript

  import { matrix } from 'vectorious';

  matrix(2, 2);
  // [[0, 0], [0, 0]]

Zeros
-----

Zeros

.. code-block:: typescript

  import { zeros } from 'vectorious';

  zeros(4);
  // [0, 0, 0, 0]

  zeros(2, 2);
  // [[0, 0], [0, 0]]

  zeros(2, 2, 2);
  // [[[0, 0]], [[0, 0]]]

Ones
----

Ones

.. code-block:: typescript

  import { ones } from 'vectorious';

  ones(4);
  // [1, 1, 1, 1]

  ones(2, 2);
  // [[1, 1], [1, 1]]

  ones(2, 2, 2);
  // [[[1, 1]], [[1, 1]]]

Random
------

Creates a vector containing random samples from a uniform distribution over :math:`[0, 1)`.

.. code-block:: typescript

  import { ones } from 'vectorious';

  ones(4);
  // [1, 1, 1, 1]

  ones(2, 2);
  // [[1, 1], [1, 1]]

  ones(2, 2, 2);
  // [[[1, 1]], [[1, 1]]]

Magic
------

Creates a magic matrix (the sums of the numbers in each row, each column, and both main diagonals are the same).

.. code-block:: typescript

  import { magic } from 'vectorious';

  magic(3);
  // [[2, 7, 6], [9, 5, 1], [4, 3, 8]]
