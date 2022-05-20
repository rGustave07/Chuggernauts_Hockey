import React from 'react';
import ReactDOM from 'react-dom/client';
// Move this to using Index pattern
import App from './pages/App/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
