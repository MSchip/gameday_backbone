var express = require( 'express' );
var gameController = require( '../controllers/gameController.js' );
var router = express.Router();


module.exports = function( app ) {
  app.get( '/', gameController.listGames );
  app.get( '/:year/:month/:day', gameController.listGames );
  app.get( '/:year/:month/:day/mini', gameController.scoreboard );
  app.get( '/:year/:month/:day/:gid', gameController.gameType );
  app.get( '/:year/:month/:day/:gid/:type', gameController.gameType );
};
