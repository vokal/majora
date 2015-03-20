
describe( "Majora Service", function ()
{
    "use strict";
    var Bitmask;

    beforeEach( module( "vokal.majora") );
    beforeEach( inject( function( _Bitmask_ )
    {
        Bitmask = _Bitmask_;
    } ) );

    it( "should return same for empty array", function ()
    {
        expect( Bitmask.toggleBits( 5, [], true ) ).toBe( 5 );
    } );

    it( "should modify for false", function ()
    {
        expect( Bitmask.toggleBits( 5, [4], false ) ).toBe( 1 );
        expect( Bitmask.toggleBits( 5, [1,4], false ) ).toBe( 0 );
    } );

    it( "should modify for true", function ()
    {
        expect( Bitmask.toggleBits( 5, [2], true ) ).toBe( 7 );
        expect( Bitmask.toggleBits( 5, [1], true ) ).toBe( 5 );
    } );

    it( "should test optimistically", function ()
    {
        expect( Bitmask.testOptimistic( 5, [1] ) ).toBe( true );
        expect( Bitmask.testOptimistic( 5, [4] ) ).toBe( true );
        expect( Bitmask.testOptimistic( 5, [4,1] ) ).toBe( true );
        expect( Bitmask.testOptimistic( 5, [5] ) ).toBe( true );
        expect( Bitmask.testOptimistic( 5, [2] ) ).toBe( false );
        expect( Bitmask.testOptimistic( 5, [0] ) ).toBe( false );
    } );

    it( "should test pessimistically", function ()
    {
        expect( Bitmask.testPessimistic( 5, [1] ) ).toBe( true );
        expect( Bitmask.testPessimistic( 5, [5] ) ).toBe( true );
        expect( Bitmask.testPessimistic( 5, [3] ) ).toBe( true );
        expect( Bitmask.testPessimistic( 5, [1,2] ) ).toBe( false );
    } );

} );
