import React from 'react';

export default class Junction extends React.Component {
    render() {
        var classes = [
            'junction',
            'junction_'+this.props.index,
            this.props.data.type
            ];
            
        if(this.props.active) {
            classes.push('active');
        }
        
        var contents = [];
        
        if(this.props.data.type == 'start') {
            contents.push(
                <div className="start"></div>
                );
        }
            
        return (
            <div className={classes.join(' ')}>{contents}</div>
            );
    }
}