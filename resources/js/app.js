var angular = require('angular');
var ngreact = require('ngreact');
var CounterComponent = require('./components/CounterComponent');
var MenubarComponent = require('./components/MenubarComponent');
var CounterController = require('./controllers/CounterController');
var injectTapEventPlugin = require('react-tap-event-plugin');

injectTapEventPlugin();

angular.module('app', ['react'])
    .value('CounterComponent', CounterComponent)
    .value('MenubarComponent', MenubarComponent)
    .controller('CounterController', CounterController)
