import React from 'react';

export default class Junction extends React.Component {
    render() {
        var classes = [
            'junction',
            this.props.data.type
            ];
            
        return (
            <div className={classes.join(' ')}></div>
            );
    }
}