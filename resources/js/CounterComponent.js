import React from 'react';

var CounterComponent = React.createClass({

    getDefaultProps: function() {
        return {
            count: 0
        };
    },

    getInitialState: function() {
        return {
            count: this.props.count
        };
    },

    componentDidMount: function() {

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
