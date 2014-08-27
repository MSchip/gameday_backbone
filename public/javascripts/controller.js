
var Games = require( './collections/games-collection.js' );

var AppController = Marionette.Controller.extend({
  initialize: function( options ) {
    // Make sideGames Collection
    var games = new Games({});
    games.fetch().then( function( results ) {
      // Show Composite view with collecion
      
    });
  },

  home: function() {
    // Call 'sideBox' to make games collection Model for current date
    // Search local storage for favorite team if it exists
      // Search if favorite team plays today
        // Call showGame with gid as argument
      // Call showGame without an argument
  },

  sideBox: function( date ) {
    // Make Collection Model and composite view of days games
  }
})

module.exports = AppController;