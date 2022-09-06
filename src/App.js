import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Hero/NavBar';


function App() {
  return (
      <div className="App">
        <NavBar />
        <ItemListContainer greeting= "Bienvenidos a Neche"/>
        
      </div>   
  );
}

export default App;
