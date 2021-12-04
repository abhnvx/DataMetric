
import './App.css';
import indexRoutes from './routes';
import {BrowserRouter, Switch, Redirect, Component, Route, rest } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
  <Switch>

            {indexRoutes.map((route, key) => {
              return (
                <Route {...route} />
              );
            })}
          </Switch>
    </BrowserRouter>
  );
}

export default App;


