import React from 'react';

export default class Line extends React.Component {
    render() {
        var lineClasses = [
            'line',
            this.props.orientation || 'horizontal'
            ];
            
        var pathClasses = [
            'pathSegment',
            this.props.orientation || 'horizontal'
            ];
            
        if(this.props.data.active) {
            pathClasses.push('active');
        }
            
        return (
            <div className={lineClasses.join(' ')}>
                <div className={pathClasses.join(' ')} onClick={this.props.clickPath}></div>
            </div>
            );
    }
}