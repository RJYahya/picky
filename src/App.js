import React from 'react';
import { Provider } from 'react-redux'
import Store from './components/redux/store'
import './App.css';
import { Footer, Header, Body, Search } from './components'
import Regist from './components/body/regest';
import CheckOut from './components/body/checkout'
import { BrowserRouter as Router ,Switch,Route } from 'react-router-dom';

function App() {
  return (
    
      <Provider store={Store}>
        <Router>
        <Header />
        <Switch >
          <Route exact path="/rest" component={Regist}/>
          <Route exact path="/home" component={Body}/>
          <Route exact path="/search" component={Search}/>
          <Route exact path="/check" component={CheckOut}/>
          <Route path="/" component={Body}/>
        </Switch >
        {/* <Body /> */}
        {/* <Search/> */}
        {/* <Regist/> */}
        {/* <CheckOut /> */}
        <Footer />
        </Router>
      </Provider>
    
  );
}

export default App;
