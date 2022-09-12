import React from 'react';
import './App.css';
//import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Hero/NavBar';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';

function App() {
  return (
      <div className="App">
        <NavBar />
        {/* <ItemListContainer greeting= "Bienvenidos a Neche"/> */}
        <ItemDetailContainer/>
      </div>   
  );
}

export default App;
