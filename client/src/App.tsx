import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import MainPage from './pages/MainPage';
import ResultPage from './pages/ResultPage';
import TestPage from './pages/TestPage';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/test" component={TestPage} />
          <Route path="/result" component={ResultPage} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
