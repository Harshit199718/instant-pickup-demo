import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

let lastScrollTop = 0;
const carEl = document.getElementById('car');
window.onscroll = onScroll;

function onScroll(e) {
  const top = window.pageYOffset;
  if (carEl !== null) {
		if (lastScrollTop > top) {
			carEl.classList.add('rotate');
			carEl.style.transition = '400ms';
		} else if (lastScrollTop < top) {
			carEl.classList.remove('rotate');
		}
		lastScrollTop = top;
	}
}

serviceWorker.unregister();

