// Service for fiddling with bitmasks

angular.module( "vokal.majora", [] )
    .factory( "Majora", [ function ()
    {
        return {
            /*
            *  @param {Number} number - the number to be mutated
            *  @param {Number} bitsArray - selects the bits to mutate in number
            *  @param {Bool} newValue - new value of the bits selected by bitsArray
            *
            *  Use: given an input `number`, update the bits matched by `bitsArray` to be `newValue`
            *
            *  Example: Say number is 8 (binary 1000) and you want to turn on the 1st (1 or 0001) and 3rd (4 or 0100)
            *  least significant bits, then bitsArray would be [ 1, 4 ] and newValue would be true. The returned value
            *  is then 13 (binary 1101).
            */
            toggleBits: function ( number, bitsArray, newValue )
            {
                for( var i = 0; i < bitsArray.length; i++ )
                {
                    if( newValue )
                    {
                        number |= bitsArray[i];
                    }
                    else
                    {
                        number &= ~bitsArray[i];
                    }
                }

                return number;
            },
            /*
            *  @param {Number} number - the number to be tested
            *  @param {Number} bitsArray - the bits to test in number
            *
            *  Use: given an input `number`, check if any of the bits in `bitsArray` are in that number
            *
            *  Example: Say number is 10 (binary 1010) and you want to check if it contains the 1st (1 or 0001)
            *  and 3rd (4 or 0100) least significant bits, then bitsArray would be [ 1, 4 ]. The returned value
            *  would be false because only the 4th and 2nd bit are on in 10. Note that if you had a mask that was
            *  always bits 1 and 3, you could also just use [ 5 ] for bitsArray because 5 is 0101.
            */
            testOptimistic: function ( number, bitsArray )
            {
                for( var i = 0; i < bitsArray.length; i++ )
                {
                    if( !!( number & bitsArray[i] ) )
                    {
                        return true;
                    }
                }
                return false;
            },
            /*
            *  @param {Number} number - the number to be tested
            *  @param {Number} bitsArray - the bits to test in number
            *
            *  Use: just like testOptimistic, but tests from bitsArray must be true for the result to be true
            *  All numbers must have some true bit overlap to be true, does not require complete overlap
            */
            testPessimistic: function ( number, bitsArray )
            {
                for( var i = 0; i < bitsArray.length; i++ )
                {
                    if( !( number & bitsArray[i] ) )
                    {
                        return false;
                    }
                }
                return true;
            }
        };
    } ] );
