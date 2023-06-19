.. installation

Installation
======================================

.. tip::

  If you are running vectorious in the browser or no BLAS or LAPACK libraries are
  available on your system, it will fall back to the naive TypeScript
  implementation, which depending on your usecase might not be what you want.

  If you want to skip the libraries use

  .. code-block:: shell

    npm install --no-optional

Node.js
########

MacOS
*****

The Accelerate framework includes both BLAS and LAPACK,
however you need to install the LAPACKE headers with Homebrew:

.. code-block:: shell

  brew install lapack
  npm install vectorious

Linux
*****

Install BLAS and LAPACK with e.g.

.. code-block:: shell

  apt-get install libblas-dev liblapack-dev
  npm install vectorious

Browser
########

.. code-block:: shell

  npm install vectorious

