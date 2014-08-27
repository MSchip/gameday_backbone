
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