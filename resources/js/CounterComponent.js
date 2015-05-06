import React from 'react';
import Counter from './Counter';

var CounterComponent = React.createClass({
    getInitialState: function() {
        return {
            count: 0
        };
    },

    componentDidMount: function() {
        new Counter();

        setInterval(function() {
            this.tick();
        }.bind(this), 1000);
    },

    tick: function() {
        var count = this.state.count + 1;

        this.setState({ count: count });
    },

    render: function() {
        return (
            <h1>
                Counter {this.state.count} 
            </h1>
        );
    }
});

export default CounterComponent;
