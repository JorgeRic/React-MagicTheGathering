import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CardsList from './pages/CardsList'
import Home from './pages/Home'
import CardDetail from './pages/CardDetail'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import './App.css';
import 'milligram'

// https://docs.magicthegathering.io/

function App() {
  return (
      <Router>
          <header>
            <h1>Magic The Gathering</h1>
        <Navbar />
          </header>
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/cards' exact component={CardsList}/>
            <Route path='/cards/:id' exact component={CardDetail}/>
            <Route component={NotFound} />
        </Switch>
      </Router>
  );
}

export default App;
