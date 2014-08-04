var http = require( 'http' );
var Promise = require( 'bluebird' );
var url = require( 'url' );

// Base URL Options
var makeUrl = function( extension ) {
  var created;
  extension = extension || '';

  created = url.parse(
    url.format({
      protocol: 'http',
      hostname: 'gd2.mlb.com',
      pathname: 'components/game/mlb/' + extension
    })
  )

  return created.href;
};

// Add zeros to dates for api path
var zeros = function( number, type ) {
  if( type === 'month' ) {
    number++;
  }

  return number < 10 ? '0' + number : number.toString();
};

// Make a date string
var makeDate = function( date ) {
  var year = date.getFullYear();
  var month = zeros( date.getMonth(), 'month' );
  var day = zeros( date.getDate() );
  var dateString = 'year_' + year + '/month_' + month + '/day_' + day + '/';

  return dateString;
};

// Make a GET request and return a promise
var get = function( requestUrl ) {
  return new Promise( function( resolve, reject ) {
    http.get( requestUrl, function( response ) {
      
      var string = '';
      
      response.on( 'data', function( chunk ) {
        string += chunk;
       });

      response.on( 'end', function() {
        resolve( string );
      });

    }).on( 'error', function( err ) {
      console.log( 'Error in request to MLB Gameday api: ', err );
      reject( err );
    });
  });
};


// Get games by date ( Date() )
// Returning an array of gid's
var getGames = function( date ) {

  // Create a pathname form the given date
  var gameIds = [];
  var dateString = makeDate( date ) + 'master_scoreboard.json';

  // Extend the base url with the created pathname
  var gamesUrl = makeUrl( dateString );

  // Make a GET request for the games with the given date
  // Returns a promise
  return new Promise( function( resolve, reject ) {
    get( gamesUrl )
    .then( function( results ) {
      var gamesArray = JSON.parse( results ).data.games.game;

      // TODO: move to client side and return data
      gamesArray.forEach( function( value ) {
        gameIds.push( 'gid_' + value.gameday );
      });
      resolve( gameIds );

    })
    .catch( function( error ) {
      console.log( 'error in gameday request: ', error );
      reject( error );
    })
  })
};

var getGameBox = function( date, gid ) {
  var gameBox = makeDate( date ) + gid + '/boxscore.json';
  
  return new Promise( function( resolve, reject ) {
    get( gameBox )
    .then( function( results ) {
      resolve( results );
    })
    .catch( function( error ) {
      console.log( 'error in gameday request: ', error );
      reject( error );
    })
  })

};


module.exports = {
  getGames: getGames,
}