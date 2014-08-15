var mlb = require('../helpers/mlb-api-wrapper.js');

var getGames = function( req, res ) {

  if( req.params.year ) {
    var year = req.params.year;
    var month = req.params.month;
    var day = req.params.day;

    mlb.getGames( new Date( month + '-' + day + '-' + year ) )
    .then( function( results ) {
      res.send( results );
    }) 
    .catch( function( error ) {
      console.log( error )
    })
  } else {
    mlb.getGames()
    .then( function( results ) {
      res.send( results );
    })
    .catch( function( error ) {
    console.log( error )
    })
  }
};

var getStats = function( req, res ) {
  var opts = req.params
  var year = opts.year;
  var month = opts.month;
  var day = opts.day;
  var gid = opts.gid;
  var type = opts.type ? opts.type : 'box';
  var date = new Date( month + '-' + day + '-' + year )

  mlb.gameData( date, gid, type )
  .then( function( results ) {
    res.send( results );
  })
  .catch( function( error ) {
    console.log( error )
  })
}


module.exports = {
  getGames: getGames,
  getStats: getStats
}