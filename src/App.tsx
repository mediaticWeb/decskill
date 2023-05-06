import React from 'react';
import './App.css';
import SearchBar from './components/searchBar/SearchBar';
import AsteroidsCardList from './components/asteroidsCardList/AsteroidsCardList';

function App() {
  return (
    <div className="App">
      <SearchBar/>
      <AsteroidsCardList/>
    </div>
  );
}

export default App;
