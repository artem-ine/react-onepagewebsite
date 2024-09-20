import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './prismic.js';
import { PrismicProvider } from '@prismicio/react';
import { BrowserRouter as Router, Link } from 'react-router-dom';  // Import Router and Link
import { client } from './prismic';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <PrismicProvider
      client={client}
      internalLinkComponent={({ href, ...props }) => <Link to={href} {...props} />} 
    >
        <App />
    </PrismicProvider>
  </React.StrictMode>
);
