var PKMParser = require( '../pkm-parser' );

var expect  = require( 'expect.js' );
var loadbytes = require( './utils/loadbytes' );

var when = require( 'when' );


var rgb_file;

describe( "Texture", function(){

  before(function() {
    return when.all( [
      loadbytes( 'assets/compressed/rgb.pkm' ).then( function(b){ rgb_file = b }),
    ]);
  });





  it( "should be loaded", function(){
    expect( rgb_file ).to.be.ok( );
  });



  it( "should  ", function(){
    PKMParser( rgb_file );


  });


});
