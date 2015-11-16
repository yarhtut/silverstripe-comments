import React from 'react';


var props = {
    source: 'test'
};

React.render(
    <EventManagerComponent {...props} />,
    document.getElementById('event-manager-component-wrapper')
);
