import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Components/login/Login';
import Register from './Components/register/Register';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<div align="center" width="100%">
					<Login/>
					<Register/>
				</div>	

	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
