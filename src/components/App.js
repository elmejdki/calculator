import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import CalculatorPage from './pages/CalculatorPage';
import HomePage from './pages/HomePage';
import QuotePage from './pages/QuotePage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './Header';

const App = () => (
  <>
    <Router>
      <div>
        <Header />
        <div className="grid center scroll max-height">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/calculator" component={CalculatorPage} />
            <Route path="/quote" component={QuotePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </Router>
  </>
);

export default App;
