#Majora Angular Bitmask Service

> Majora is an Angular service for fiddling with bitmasks

* [Usage](#section-usage)
* [Interface](#section-interface)

## <a name="section-usage"></a>Usage

Include the file found in the `dist` directory.

When creating your main angular module, include `vokal.majora` in the list of included modules, e.g.
```js
angular.module( "myApp", [ "vokal.majora" ] );
```
Include `Majora` into any modules where you want to use the bitmask service, and use the following functions to manipulate bitmasks.

## <a name="section-interface"></a>Interface

The following methods can be called on the `Majora` service once injected into your Angular code.

* [toggleBits( number, bitsArray, newValue )](#method-toggleBits)
* [testOptimistic( number, bitsArray )](#method-testOptimistic)
* [testPessimistic( number, bitsArray )](#method-testPessimistic)

### Methods

#### <a name="method-toggleBits"></a>`toggleBits( number, bitsArray, newValue )`

Given an input `number`, update the bits matched by `bitsArray` to be `newValue`

##### Arguments

1. `number`    | *Number* | the number to be mutated
2. `bitsArray` | *Number* | selects the bits to mutate in number
3. `newValue`  | *Bool*   | new value of the bits selected by bitsArray

##### Returns

*Number* | the decimal representation of the `number` argument with the selected bits modified

##### Example

Say `number` is 8 (binary 1000) and you want to turn on the 1st (1 or 0001) and 3rd (4 or 0100)
least significant bits, then `bitsArray` would be [ 1, 4 ] and `newValue` would be true. The returned value
is then 13 (binary 1101).

* * *

#### <a name="method-testOptimistic"></a>`testOptimistic( number, bitsArray )`

Given an input `number`, check if any of the bits in `bitsArray` are in that number

##### Arguments

1. `number`    | *Number* | the number to be tested
2. `bitsArray` | *Number* | the bits to test in number

##### Returns

*Bool* | indication whether all of the bits in `bitsArray` are active in `number`

##### Example
  
Say `number` is 10 (binary 1010) and you want to check if it contains the 1st (1 or 0001)
and 3rd (4 or 0100) least significant bits, then `bitsArray` would be [ 1, 4 ]. The returned value
would be false because only the 4th and 2nd bit are on in 10. Note that if you had a mask that was
always bits 1 and 3, you could also just use [ 5 ] for bitsArray because 5 is 0101.

* * *

#### <a name="method-testPessimistic"></a>`testPessimistic( number, bitsArray )`

Just like testOptimistic, but tests from bitsArray must be true for the result to be true.  
All numbers must have some true bit overlap to be true, does not require complete overlap.

##### Arguments

1. `number`    | *Number* | the number to be tested
2. `bitsArray` | *Number* | the bits to test in number

##### Returns

*Bool* | indication whether any of the bits in `bitsArray` are active in `number`
