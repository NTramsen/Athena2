import React, {useState, useEffect} from 'react';
import './App.css';
import Checkout from '../Checkout/Checkout';
import NavBar from '../NavBar/NavBar';
import Dashboard from '../Dashboard/Dashboard';
import Search from '../Search/Search';
import Items from '../Items/Items';
import Account from '../Account/Account';
import Logout from '../Logout/Logout';
import ItemInterface from '../ItemInterface/ItemInterface';
import Inventory from '../Inventory/Inventory';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

  const [apiResponse, setApiResponse] = useState('');

  const callAPI = () => {
      fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => setApiResponse(res));
  }

  useEffect(()=>{
    callAPI();
  },[]);

  return (    
    <div className = 'main-container'>
      <div className = 'top-banner'>
        <h1>Welcome Neil Tramsen</h1>
        <p>{apiResponse}</p>
      </div>
      <Router>
        <div className = 'navbar'>
          <NavBar/>
        </div>
        <div className = 'content'>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='/search' component={Search} />
            <Route exact path='/myitems' component={Items} />
            <Route exact path='/myaccount' component={Account} />
            <Route exact path='/logout' component={Logout} />
            <Route exact path='/item' component={ItemInterface} />
            <Route exact path='/inventory' component={Inventory} />
          </Switch>
        </div>
      </Router>
      {/*<div className='checkout'>
        <Checkout className = 'checkout'/>
      </div>*/}
    </div>
  );
}

export default App;
