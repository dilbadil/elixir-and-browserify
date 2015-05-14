var angular = require('angular');
var React = require('react');
var ngreact = require('ngreact');
var CounterComponent = require('./CounterComponent');
var CounterController = require('./controllers/CounterController');

angular.module('app', ['react'])
    .value('CounterComponent', CounterComponent)
    .controller('CounterController', CounterController)
