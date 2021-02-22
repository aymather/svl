import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import RootProvider from './utils/context'
import './fonts/Retron2000.ttf'
import './fonts/NeueMontreal.otf'
import './fonts/MessinaSans.ttf'

ReactDOM.render(
    <React.StrictMode>
		<RootProvider>
			<Router>
				<App />
			</Router>
		</RootProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
