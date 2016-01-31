import React from 'react';
import ReactDom from 'react-dom';

require('file?name=[name].[ext]!../index.html');

require('file?name=js/[name].[ext]!jquery/dist/jquery.min.js');
require('file?name=js/[name].[ext]!bootstrap3/dist/js/bootstrap.min.js');

require('file?name=css/[name].[ext]!bootstrap3/dist/css/bootstrap.min.css');
require('file?name=css/[name].[ext]!bootstrap3/dist/css/bootstrap-theme.min.css');

import Game from './game.jsx';

ReactDom.render(
	<Game />
	, document.getElementById('wrapper')
);