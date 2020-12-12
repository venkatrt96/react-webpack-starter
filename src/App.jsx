import React, { Suspense, lazy } from 'react';
import { Switch, HashRouter as Router, Route } from 'react-router-dom';
import Loader from './components/Loader';
import './index.scss';

const Home = lazy(() => import(/* webpackChunkName: "Home" */ './components/Home'));

const App = () => (
  <Router>
    <div>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Suspense>
    </div>
  </Router>
);

export default App;
