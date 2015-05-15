import React from 'react';
import mui from 'material-ui';

var RaisedButton = mui.RaisedButton;
var IconButton = mui.IconButton;

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
                <RaisedButton label={this.state.count} />
                <IconButton iconClassName="fa fa-github" tooltip="GitHub" />
            </h1>
        );
    }
});

export default CounterComponent;
