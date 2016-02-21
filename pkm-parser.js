var ETC_PKM_HEADER_SIZE       = 16,
    PKM_MAGIC                 = 0x504B4D20,// 'PKM '
    PKM_V10                   = 0x3130,    // '10'
    ETC1_RGB_NO_MIPMAPS       = 0;

var COMPRESSED_RGB_ETC1_WEBGL = 0x8D64;




function parse( buffer ) {
  if( buffer.byteLength < ETC_PKM_HEADER_SIZE + 4 ){
    throw new Error( 'PKM parse error : file error' );
  }

  var header = new DataView( buffer , 0, ETC_PKM_HEADER_SIZE );

  var magic     = header.getUint32( 0 );
  var version   = header.getUint16( 4 ); // "10"
  var codec     = header.getUint16( 6 ); // should be ETC1_RGB_NO_MIPMAPS

  if( magic !== PKM_MAGIC ){
    throw new Error( 'PKM parse error : bad magic' );
  }
  if( version !== PKM_V10 ){
    throw new Error( 'PKM parse error : unsupported version' );
  }
  if( codec !== ETC1_RGB_NO_MIPMAPS ){
    throw new Error( 'PKM parse error : unsupported codec' );
  }

  var extWidth  = header.getUint16( 8 );
  var extHeight = header.getUint16( 10 );
  var width     = header.getUint16( 12 );
  var height    = header.getUint16( 14 );

  var data = new Uint8Array( buffer, ETC_PKM_HEADER_SIZE );

  return {
    width     : extWidth,
    height    : extHeight,
    surfaces  : [[data]],
    format    : COMPRESSED_RGB_ETC1_WEBGL
  };
}

module.exports = parse;