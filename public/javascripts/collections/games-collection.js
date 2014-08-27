var Games = Backbone.Collection.extend({

  initialize: function( models, options ) {
    this.date = new Date();
    this.year = this.date.getFullYear();
    this.month = this.date.getMonth();
    this.day = this.date.getDate();
  },

  url: '/games/2014/08/15',
  // url: '/games/' + this.year + '/' + this.month + '/' + this.day,

  model: require( '../models/side-game-model.js' ),

  // parse: function( response ) {
  //   return response.Data;
  // }

})

module.exports = Games;