import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './prismic.js';
import { PrismicProvider, PrismicToolbar } from '@prismicio/react';
import { BrowserRouter as Router, Link } from 'react-router-dom';  // Import Router and Link
import { client } from './prismic';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <PrismicProvider
      client={client}>
      <App />
      <PrismicToolbar repositoryName={"react-onepagewebsite"} />
    </PrismicProvider>
  </React.StrictMode>
);
