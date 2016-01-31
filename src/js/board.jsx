import React from 'react';

import Block from './block.jsx';
import Line from './line.jsx';
import Junction from './junction.jsx';

export default class Board extends React.Component {
    render() {
        var pieces = [];
        
        for(var h=0; h<this.props.data.height; h++) {
            var row = [];
            for(var w=0; w<this.props.data.width; w++) {
                row.push(<Junction key={'junction_'+h+'_'+w}/>);
                row.push(<Line orientation="horizontal" key={'line_h_'+w+'_'+h}/>);
                if(w == this.props.data.width -1) {
                    row.push(<Junction key={'junction_'+h+'_'+(w+1)}/>);
                }
            }
            pieces.push(<div className="row" key={'row'+h+'_0'}>{row}</div>);
            
            row=[];
            for(var w=0; w<this.props.data.width; w++) {
                row.push(<Line orientation="vertical" key={'line_v_'+w+'_'+h}/>);
                row.push(<Block key={'block'+w+'_'+h}/>);
                if(w == this.props.data.width -1) {
                    row.push(<Line orientation="vertical" key={'line_v_'+w+'_'+(h+1)}/>);
                }
            }
            pieces.push(<div className="row" key={'row'+h+'_1'}>{row}</div>);
            
            if(h == this.props.data.height-1) {
                row=[];
                for(var w=0; w<this.props.data.width; w++) {
                    row.push(<Junction key={'junction_'+(h+1)+'_'+w}/>);
                    row.push(<Line orientation="horizontal" key={'line_h_'+(w+1)+'_'+h}/>);
                    if(w == this.props.data.width -1) {
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