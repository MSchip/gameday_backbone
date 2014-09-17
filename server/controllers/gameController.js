var gameday = require('gameday-helper');

var makeDate = function( req ) {
  var date;
  if( req.params.year === undefined ) {
    date = new Date();
  } else {
    var year = req.params.year;
    var month = req.params.month;
    var day = req.params.day;
    date = new Date( month + '-' + day + '-' + year );
  }
  return date;
}

var listGames = function( req, res ) {

  var date = makeDate( req );

  gameday.listGameIds( date )
  .then( function( results ) {
    res.send( results );
  }) 
  .catch( function( error ) {
    console.log( error )
  });
  
};

var scoreboard = function( req, res ) {
  
  var date = makeDate( req );

  gameday.miniScoreboard( date )
  .then( function( results ) {
    res.send( results );
  })
  .catch( function( error ) {
    console.log( error )
  });

};

var gameType = function( req, res ) {

  var date = makeDate( req );
  var options = [ 'boxscore', 'events', 'feed', 'linescore', 'plays' ];
  
  var type = req.params.type || 'boxscore';

  if( options.indexOf( type ) === -1 ) {
    res.status( 400 ).send( 'Not a valid type' );
  }

  gameday[ type ]( req.params.id )
  .then( function( results ) {
    res.send( results );
  })
  .catch( function( error ) {
    console.log( error );
  });

};


module.exports = {
  listGames: listGames,
  scoreboard: scoreboard,
  gameType: gameType
}