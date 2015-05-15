import React from 'react';
import mui from 'material-ui';

var Toolbar = mui.Toolbar,
    ToolbarGroup = mui.ToolbarGroup,
    DropDownMenu = mui.DropDownMenu,
    DropDownIcon = mui.DropDownIcon,
    FontIcon = mui.FontIcon,
    RaisedButton = mui.RaisedButton
    ;

var filterOptions = [
  { payload: '1', text: 'All Broadcasts' },
  { payload: '2', text: 'All Voice' },
  { payload: '3', text: 'All Text' },
  { payload: '4', text: 'Complete Voice' },
  { payload: '5', text: 'Complete Text' },
  { payload: '6', text: 'Active Voice' },
  { payload: '7', text: 'Active Text' },
];

var iconMenuItems = [
    { payload: '1', text: 'Download' },
    { payload: '2', text: 'More Info' }
];

var MenubarComponent = React.createClass({
    
    render: function() {
        return (
            <Toolbar>
                <ToolbarGroup key={0} float="left">
                    <DropDownMenu menuItems={filterOptions} />
                </ToolbarGroup>
                <ToolbarGroup key={1} float="right">
                    <FontIcon className="fa fa-plane" />
                    <FontIcon className="fa fa-heart" />
                    <DropDownIcon iconClassName="fa fa-check" menuItems={iconMenuItems} />
                    <span className="mui-toolbar-separator">&nbsp;</span>
                    <RaisedButton label="Create Broadcast" primary={true} />
                </ToolbarGroup>
            </Toolbar>
        );
    }

});

export default MenubarComponent

