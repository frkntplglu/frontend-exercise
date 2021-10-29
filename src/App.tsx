import React, { useEffect } from 'react';
import { useAppDispatch } from './app/hooks';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { getEntries } from './features/entry/entrySlice';
import { Home } from './pages/Home';
import { Movies } from './pages/Movies';
import { Series } from './pages/Series';


function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntries());
  },[dispatch])

  return (
    <div className="App">
      <Header />
      <Home />
      <Movies />
      <Series />
      <Footer />
    </div>
  );
}

export default App;
