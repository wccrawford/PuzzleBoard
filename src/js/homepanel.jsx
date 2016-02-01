import React from 'react';
import Board from './board.jsx';

export default class HomePanel extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<Board data={this.props.board} updateBlock={this.props.updateBlock} />
			</div>
		);
	}
}
