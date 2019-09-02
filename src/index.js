import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import './index.css';

import App from './App';
import { registerServiceWorker } from './lib/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
