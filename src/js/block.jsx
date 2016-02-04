import React from 'react';

import Junction from './junction.jsx';
import Line from './line.jsx';

export default class Block extends React.Component {
    render() {
        var junctions = this.props.data.junctions.map((junction, index) => {
            var active = false;
            
            var paths = [
                this.props.data.paths[0],
                this.props.data.paths[1],
                this.props.data.paths[2] || (this.neighbors[2] && this.neighbors[2].paths[0].active),
                this.props.data.paths[3] || (this.neighbors[3] && this.neighbors[3].paths[1].active),
                ];
            
            switch(index) {
                case 0:
                    active = paths[0].active || paths[1].active;
                    break;
                case 1:
                    active = paths[0].active || paths[2].active;
                    break;
                case 2:
                    active = paths[1].active || paths[3].active;
                    break;
                case 3:
                    active = paths[2].active || paths[3].active;
                    break;
            }
            return (
                <Junction data={junction} index={index} key={'junction_'+this.props.index+'_'+index} active={active} />
                );
        });
        
        var lines = this.props.data.paths.map((line, index) => {
            if(index > 1 && this.props.neighbors[index] != null) {
                return;
            }
            
            return (
                <Line data={line} index={index} key={'line_'+this.props.index+'_'+index} clickPath={this.props.clickPath.bind(this, this.props.index, index)}/>
                );
        });
        return (
            <div className="block">
                <div className="center"></div>
                {junctions}
                {lines}
            </div>
            );
    }
}