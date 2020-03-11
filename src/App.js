import React from 'react';
import './reset.css';
import './App.css';
import { withRouter } from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import routes from './routes';

function App() {
  return (
    <div className="App ">
      <Menu />
      {routes}
    </div>
  );
}

export default withRouter(App);
