import React from 'react';

export default class Line extends React.Component {
    render() {
        var orientation = this.props.index == 0 || this.props.index == 3 ? 'horizontal' : 'vertical';
        var lineClasses = [
            'line',
            'line_'+this.props.index,
            orientation
            ];
            
        var pathClasses = [
            'pathSegment',
            'pathSegment_'+this.props.index,
            orientation
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