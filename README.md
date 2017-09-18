[![Build Status](https://travis-ci.org/soeirosantos/favideos.svg?branch=master)](https://travis-ci.org/soeirosantos/favideos)
[![Coverage Status](https://coveralls.io/repos/github/soeirosantos/favideos/badge.svg?branch=master)](https://coveralls.io/github/soeirosantos/favideos?branch=master)
# Favideos - My Favorites videos

It's a simple project where some concepts of Node.js testing are reviewed.

More specifically, this code goes through the frameworks mocha, chai, sinon, 
nock, assert and the concepts of spies, stubs and mocks which can be really 
tricky in an async and callback based approach.

## Mocha: https://www.npmjs.com/package/mocha

Is a test runner (like JUnit)

## Chai: http://chaijs.com/

Chai is a BDD / TDD assertion library for node and the browser that can be 
delightfully paired with any javascript testing framework.

## Sinon: http://sinonjs.org/

Standalone test spies, stubs and mocks for JavaScript.

### Spy - http://sinonjs.org/releases/v3.3.0/spies/

A test spy is a function that records arguments, return value, the value of this
and exception thrown (if any) for all its calls. There are two types of spies: 
Some are anonymous functions, while others wrap methods that already exist in 
the system under test.

### Stub - http://sinonjs.org/releases/v3.3.0/stubs/

Test stubs are functions (spies) with pre-programmed behavior.
They support the full test spy API in addition to methods which can be used to
alter the stub’s behavior. As spies, stubs can be either anonymous, or wrap 
existing functions. When wrapping an existing function with a stub, the 
original function is not called.

You can use stubs to control a method’s behaviour to force a code path (like
throwing errors) or to prevent calls to external resources (like HTTP
APIs).

### Mock - http://sinonjs.org/releases/v3.3.0/mocks/

Mocks (and mock expectations) are fake methods (like spies) with pre-programmed 
behavior (like stubs) as well as pre-programmed expectations. Mocks should only 
be used for the method under test. In every unit test, there should be one unit 
under test. The rule of thumb is: if you wouldn’t add an assertion for some 
specific call, don’t mock it. Use a stub instead.