// REQUIRED IMPORTS
import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// COMPONENTS
import './App.css';
import Header from '../Header/Header'
import Feelings from '../Feelings/Feelings'
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Admin from '../Admin/Admin';
import Review from '../Review/Review';
import Complete from '../Complete/Complete';
import Edit from '../Edit/Edit';

// MUI IMPORTS
import Grid from '@mui/material/Grid';
import { createTheme } from '@mui/material/styles';




function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#2A324B',
        contrastText: '#ffcc00',
      },
      secondary: {
        main: '#F1C0E8',
        contrastText: '#ffcc00',
      },
    },
  });

  return (
    <div className='App'>
      <Header />
      <Router>
        <Route exact path="/">
          <Feelings />
        </Route>
        <Route exact path="/two">
          <Understanding />
        </Route>
        <Route exact path="/three">
          <Supported />
        </Route>
        <Route exact path="/four">
          <Comments />
        </Route>
        <Route exact path="/review">
          <Review />
        </Route>
        <Route exact path="/edit">
          <Edit />
        </Route>
        <Route exact path="/complete">
          <Complete />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
      </Router>
    </div>
  );
}

export default App;
