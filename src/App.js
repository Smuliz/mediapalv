import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './views/Home';
import Profile from './views/Profile';
import Single from './views/Single';
import Login from './views/Login';
import Logout from './views/Logout';
import Upload from './views/Upload';
import { MediaProvider } from './contexts/MediaContext';
import { Container } from '@material-ui/core';




const App = () => {
  return (
    // eslint-disable-next-line no-undef
    <Router basename={process.env.PUBLIC_URL}>
      <MediaProvider>
        <Container>
          <Nav />
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/single/:id" component={Single} />
            <Route path="/logout" component={Logout} />
            <Route path="/upload" component={Upload} />
          </Switch>
        </Container>
      </MediaProvider>
    </Router>
  );
};

export default App;
