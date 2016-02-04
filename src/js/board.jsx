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
    
    getNeighbors(x, y) {
        var neighbors = [];
        
        neighbors.push(this.getBlock(x, y-1));
        neighbors.push(this.getBlock(x-1, y));
        neighbors.push(this.getBlock(x+1, y));
        neighbors.push(this.getBlock(x, y+1));
        
        return neighbors;
    }
    
    getBlock(x, y) {
        if(x >= 0 && y >= 0 && x < this.props.data.width && y < this.props.data.height) {
            var index = (y * this.props.data.height) + x;
            return this.props.data.blocks[index];
        }
        
        return null;
    }
    
    render() {
        var pieces = [];
        for(var h=0; h<this.props.data.height; h++) {
            var row = [];
            
            for(var w=0; w<this.props.data.width; w++) {
                var index = (h*this.props.data.height) + w,
                    block = this.props.data.blocks[index],
                    neighbors = this.getNeighbors(w, h);
                
                row.push(
                    <Block key={'block_'+index} index={index} data={block} clickPath={this.clickPath.bind(this)} neighbors={neighbors}/>
                    );
            }
            
            pieces.push(
                <div className="row" key={'row_'+h}>
                    {row}
                </div>
                );
        }
        
        return (
            <div className="board">
                {pieces}
            </div>
            );
    }
}