(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./public/javascripts/main.js":[function(require,module,exports){

var AppController = require( './controller.js');

var app = new Backbone.Marionette.Application();

app.addRegions({
  main: '#main',
  sideBox: '#sideBox'
});

app.on( 'before:start', function( options ) {
  this.controller = new AppController({
    regions: {
      main: this.main,
      sidebox: this.sideBox
    }
  });
  this.router = new Marionette.AppRouter({
    controller: this.controller,
    appRoutes: {
      '': 'home'
    }
  });
  this.controller.router = this.router;
});

app.on( 'start', function( options ) {
  if( Backbone.history) {
    Backbone.history.start({ pushState: true });
  }
})

window.app = app;

module.exports = app;
},{"./controller.js":"/Users/mSchip/gameday_backbone/public/javascripts/controller.js"}],"/Users/mSchip/gameday_backbone/public/javascripts/collections/games-collection.js":[function(require,module,exports){
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
},{"../models/side-game-model.js":"/Users/mSchip/gameday_backbone/public/javascripts/models/side-game-model.js"}],"/Users/mSchip/gameday_backbone/public/javascripts/controller.js":[function(require,module,exports){

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
},{"./collections/games-collection.js":"/Users/mSchip/gameday_backbone/public/javascripts/collections/games-collection.js"}],"/Users/mSchip/gameday_backbone/public/javascripts/models/side-game-model.js":[function(require,module,exports){
var SideGame = Backbone.Model.extend({

  initialize: function( options ) {
    
  }

});

module.exports = SideGame;
},{}]},{},["./public/javascripts/main.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tU2NoaXAvZ2FtZWRheV9iYWNrYm9uZS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiLi9wdWJsaWMvamF2YXNjcmlwdHMvbWFpbi5qcyIsIi9Vc2Vycy9tU2NoaXAvZ2FtZWRheV9iYWNrYm9uZS9wdWJsaWMvamF2YXNjcmlwdHMvY29sbGVjdGlvbnMvZ2FtZXMtY29sbGVjdGlvbi5qcyIsIi9Vc2Vycy9tU2NoaXAvZ2FtZWRheV9iYWNrYm9uZS9wdWJsaWMvamF2YXNjcmlwdHMvY29udHJvbGxlci5qcyIsIi9Vc2Vycy9tU2NoaXAvZ2FtZWRheV9iYWNrYm9uZS9wdWJsaWMvamF2YXNjcmlwdHMvbW9kZWxzL3NpZGUtZ2FtZS1tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG52YXIgQXBwQ29udHJvbGxlciA9IHJlcXVpcmUoICcuL2NvbnRyb2xsZXIuanMnKTtcblxudmFyIGFwcCA9IG5ldyBCYWNrYm9uZS5NYXJpb25ldHRlLkFwcGxpY2F0aW9uKCk7XG5cbmFwcC5hZGRSZWdpb25zKHtcbiAgbWFpbjogJyNtYWluJyxcbiAgc2lkZUJveDogJyNzaWRlQm94J1xufSk7XG5cbmFwcC5vbiggJ2JlZm9yZTpzdGFydCcsIGZ1bmN0aW9uKCBvcHRpb25zICkge1xuICB0aGlzLmNvbnRyb2xsZXIgPSBuZXcgQXBwQ29udHJvbGxlcih7XG4gICAgcmVnaW9uczoge1xuICAgICAgbWFpbjogdGhpcy5tYWluLFxuICAgICAgc2lkZWJveDogdGhpcy5zaWRlQm94XG4gICAgfVxuICB9KTtcbiAgdGhpcy5yb3V0ZXIgPSBuZXcgTWFyaW9uZXR0ZS5BcHBSb3V0ZXIoe1xuICAgIGNvbnRyb2xsZXI6IHRoaXMuY29udHJvbGxlcixcbiAgICBhcHBSb3V0ZXM6IHtcbiAgICAgICcnOiAnaG9tZSdcbiAgICB9XG4gIH0pO1xuICB0aGlzLmNvbnRyb2xsZXIucm91dGVyID0gdGhpcy5yb3V0ZXI7XG59KTtcblxuYXBwLm9uKCAnc3RhcnQnLCBmdW5jdGlvbiggb3B0aW9ucyApIHtcbiAgaWYoIEJhY2tib25lLmhpc3RvcnkpIHtcbiAgICBCYWNrYm9uZS5oaXN0b3J5LnN0YXJ0KHsgcHVzaFN0YXRlOiB0cnVlIH0pO1xuICB9XG59KVxuXG53aW5kb3cuYXBwID0gYXBwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFwcDsiLCJ2YXIgR2FtZXMgPSBCYWNrYm9uZS5Db2xsZWN0aW9uLmV4dGVuZCh7XG5cbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oIG1vZGVscywgb3B0aW9ucyApIHtcbiAgICB0aGlzLmRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMueWVhciA9IHRoaXMuZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIHRoaXMubW9udGggPSB0aGlzLmRhdGUuZ2V0TW9udGgoKTtcbiAgICB0aGlzLmRheSA9IHRoaXMuZGF0ZS5nZXREYXRlKCk7XG4gIH0sXG5cbiAgdXJsOiAnL2dhbWVzLzIwMTQvMDgvMTUnLFxuICAvLyB1cmw6ICcvZ2FtZXMvJyArIHRoaXMueWVhciArICcvJyArIHRoaXMubW9udGggKyAnLycgKyB0aGlzLmRheSxcblxuICBtb2RlbDogcmVxdWlyZSggJy4uL21vZGVscy9zaWRlLWdhbWUtbW9kZWwuanMnICksXG5cbiAgLy8gcGFyc2U6IGZ1bmN0aW9uKCByZXNwb25zZSApIHtcbiAgLy8gICByZXR1cm4gcmVzcG9uc2UuRGF0YTtcbiAgLy8gfVxuXG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVzOyIsIlxudmFyIEdhbWVzID0gcmVxdWlyZSggJy4vY29sbGVjdGlvbnMvZ2FtZXMtY29sbGVjdGlvbi5qcycgKTtcblxudmFyIEFwcENvbnRyb2xsZXIgPSBNYXJpb25ldHRlLkNvbnRyb2xsZXIuZXh0ZW5kKHtcbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oIG9wdGlvbnMgKSB7XG4gICAgLy8gTWFrZSBzaWRlR2FtZXMgQ29sbGVjdGlvblxuICAgIHZhciBnYW1lcyA9IG5ldyBHYW1lcyh7fSk7XG4gICAgZ2FtZXMuZmV0Y2goKS50aGVuKCBmdW5jdGlvbiggcmVzdWx0cyApIHtcbiAgICAgIC8vIFNob3cgQ29tcG9zaXRlIHZpZXcgd2l0aCBjb2xsZWNpb25cbiAgICAgIFxuICAgIH0pO1xuICB9LFxuXG4gIGhvbWU6IGZ1bmN0aW9uKCkge1xuICAgIC8vIENhbGwgJ3NpZGVCb3gnIHRvIG1ha2UgZ2FtZXMgY29sbGVjdGlvbiBNb2RlbCBmb3IgY3VycmVudCBkYXRlXG4gICAgLy8gU2VhcmNoIGxvY2FsIHN0b3JhZ2UgZm9yIGZhdm9yaXRlIHRlYW0gaWYgaXQgZXhpc3RzXG4gICAgICAvLyBTZWFyY2ggaWYgZmF2b3JpdGUgdGVhbSBwbGF5cyB0b2RheVxuICAgICAgICAvLyBDYWxsIHNob3dHYW1lIHdpdGggZ2lkIGFzIGFyZ3VtZW50XG4gICAgICAvLyBDYWxsIHNob3dHYW1lIHdpdGhvdXQgYW4gYXJndW1lbnRcbiAgfSxcblxuICBzaWRlQm94OiBmdW5jdGlvbiggZGF0ZSApIHtcbiAgICAvLyBNYWtlIENvbGxlY3Rpb24gTW9kZWwgYW5kIGNvbXBvc2l0ZSB2aWV3IG9mIGRheXMgZ2FtZXNcbiAgfVxufSlcblxubW9kdWxlLmV4cG9ydHMgPSBBcHBDb250cm9sbGVyOyIsInZhciBTaWRlR2FtZSA9IEJhY2tib25lLk1vZGVsLmV4dGVuZCh7XG5cbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oIG9wdGlvbnMgKSB7XG4gICAgXG4gIH1cblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2lkZUdhbWU7Il19
