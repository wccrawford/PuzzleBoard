import React from 'react';

import HomePanel from './homepanel.jsx';
import OptionsPanel from './optionspanel.jsx';

export default class Game extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			board: {
				width: 2,
				height: 2,
				blocks: []
			}
		};
		
		this.state.board.blocks = this.createBlocks(this.state.board.width, this.state.board.height);
	}
	
	createBlocks(width, height) {
		var blocks = [];
		
		for(var i=0; i<width*height; i++) {
			blocks.push({});
		}
		
		return blocks;
	}
	render() {
		return (
			<div>
				<ul className="nav nav-tabs" role="tablist">
					<li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Home</a></li>
					<li role="presentation"><a href="#options" aria-controls="options" role="tab" data-toggle="tab">Options</a></li>
				</ul>
				<div className="tab-content">
					<div role="tabpanel" className="tab-pane active" id="home">
						<HomePanel board={this.state.board}/>
					</div>
					<div role="tabpanel" className="tab-pane" id="options">
						<OptionsPanel />
					</div>
				</div>
			</div>
		);
	}
}