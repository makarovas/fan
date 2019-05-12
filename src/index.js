import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>

			</Routes>
		</BrowserRouter>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));
