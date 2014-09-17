var express = require( 'express' );
var gameController = require( '../controllers/gameController.js' );
var router = express.Router();


module.exports = function( app ) {
  app.get( '/', gameController.listGames );
  app.get( '/gid/:id',gameController.gameType );
  app.get( '/gid/:id/:type',gameController.gameType );
  app.get( '/:year/:month/:day', gameController.listGames );
  app.get( '/:year/:month/:day/mini', gameController.scoreboard );
  app.get( '/:year/:month/:day/:id', gameController.gameType );
  app.get( '/:year/:month/:day/:id/:type', gameController.gameType );
};
