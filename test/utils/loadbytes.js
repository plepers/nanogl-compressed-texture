
var when = require( 'when' );


function loadBytes( url ) {
  return _ajax( url, 'arraybuffer' );
}


function _ajax( url, rtype ) {
  var deferred, xhr;
  var method = 'GET';

  deferred = when.defer();
  xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.responseType = rtype;
  xhr.onload = function() {
    return deferred.resolve(xhr.response);
  };
  xhr.error = function(e) {
    return deferred.reject(e);
  };
  xhr.send();
  return deferred.promise;
}

module.exports = loadBytes;