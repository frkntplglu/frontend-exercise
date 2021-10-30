import React, { useEffect } from 'react';
import { useAppDispatch } from '@store/hooks';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { getEntries } from '@features/entry/entrySlice';
import { Home } from '@pages/Home';
import { Movies } from '@pages/Movies';
import { Series } from '@pages/Series';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntries());
  },[dispatch])

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/series">
            <Series />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
