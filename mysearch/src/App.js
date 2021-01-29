import React from 'react';
import './App.css';
import MySearch from './components/MySearch';

function App() {
  return (
    <div className="App">
      <h2> you need a single item from Big Data collection to search. Eather you have to filter <em>it or sort it.</em> let us use filter</h2>
      <MySearch />
    </div>
  );
}

export default App;
