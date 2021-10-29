import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { getEntries, selectEntries } from './features/entry/entrySlice';
import { Home } from './pages/Home';


function App() {
  const entries = useAppSelector(selectEntries);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntries());
  },[dispatch, entries])

  return (
    <div className="App">
      <Header />
      <Home />
      {/* {
        entries.map((entry: any, index: any) => <p key={index}>{entry.title}</p>)
      } */}
      <Footer />
    </div>
  );
}

export default App;
