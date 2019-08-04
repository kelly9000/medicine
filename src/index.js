import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Components/login/Login';
import Register from './Components/register/Register';
import Searchcomponent from './Components/search/Search';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<div align="center">
					<Searchcomponent/>
					
				</div>	

	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
