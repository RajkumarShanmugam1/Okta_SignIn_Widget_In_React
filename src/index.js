import React from 'react';
import { BrowserRouter as Router , Switch} from 'react-router-dom';
import App from './App';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <Router>
     <Switch>
        <App />
     </Switch>
  </Router>
);