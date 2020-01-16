import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Container } from 'react-bootstrap';
import store from './redux';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Main from './pages/Main';
import SingleUser from './pages/SingleUser';



function App() {
  return (
    <Provider store={store} >
      <Router>
        <Container>
          <Route exact path='/' component={Main} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/create-account' component={Signup} />
          <Route path='/user/:name' component={SingleUser} />
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
