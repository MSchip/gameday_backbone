var express = require( 'express' );
var gameController = require( '../controllers/gameController.js' );
var router = express.Router();


module.exports = function( app ) {
  app.get( '/', gameController.getGames );
  app.get( '/:year/:month/:day', gameController.getGames );
  app.get( '/:year/:month/:day/:gid', gameController.getStats );
  app.get( '/:year/:month/:day/:gid/:type', gameController.getStats );
};
