import React from 'react';

import Block from './block.jsx';
import Line from './line.jsx';
import Junction from './junction.jsx';

export default class Board extends React.Component {
    clickPath(blockIndex, pathIndex) {
        var block = this.props.data.blocks[blockIndex];
        block.paths[pathIndex].active = !block.paths[pathIndex].active;
        
        this.props.updateBlock(blockIndex, block);
    }
    
    render() {
        var pieces = [];
        
        for(var h=0; h<this.props.data.height; h++) {
            var row = [];
            for(var w=0; w<this.props.data.width; w++) {
                var index = (h*this.props.data.height) + w,
                    block = this.props.data.blocks[index];
                    
                row.push(<Junction key={'junction_'+h+'_'+w} data={block.junctions[0]}/>);
                row.push(<Line orientation="horizontal" key={'line_h_'+w+'_'+h} clickPath={this.clickPath.bind(this, index, 0)} data={block.paths[0]} />);
                if(w == this.props.data.width-1) {
                    row.push(<Junction key={'junction_'+h+'_'+(w+1)} data={block.junctions[1]}/>);
                }
            }
            pieces.push(<div className="row" key={'row'+h+'_0'}>{row}</div>);
            
            row=[];
            for(var w=0; w<this.props.data.width; w++) {
                var index = (h*this.props.data.height) + w,
                    block = this.props.data.blocks[index];
                    
                row.push(<Line orientation="vertical" key={'line_v_'+w+'_'+h} clickPath={this.clickPath.bind(this, index, 1)} data={block.paths[1]} />);
                row.push(<Block key={'block'+w+'_'+h}/>);
                if(w == this.props.data.width-1) {
                    row.push(<Line orientation="vertical" key={'line_v_'+w+'_'+(h+1)} clickPath={this.clickPath.bind(this, index, 2)} data={block.paths[2]} />);
                }
            }
            pieces.push(<div className="row" key={'row'+h+'_1'}>{row}</div>);
            
            if(h == this.props.data.height-1) {
                row=[];
                for(var w=0; w<this.props.data.width; w++) {
                    var index = (h*this.props.data.height) + w,
                        block = this.props.data.blocks[index];
                        
                    row.push(<Junction key={'junction_'+(h+1)+'_'+w}/>);
                    row.push(<Line orientation="horizontal" key={'line_h_'+(w+1)+'_'+h} clickPath={this.clickPath.bind(this, index, 3)} data={block.paths[3]} />);
                    if(w == this.props.data.width-1) {
                        row.push(<Junction key={'junction_'+(h+1)+'_'+(w+1)}/>);
                    }
                }
            pieces.push(<div className="row" key={'row'+h+'_2'}>{row}</div>);
            }
        }
        
        return (
            <div className="board">
                {pieces}
            </div>
            );
    }
}