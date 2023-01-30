import './App.css';
import React from 'react';
import Header from './Components/header/Header'
import Body from './Components/body/Body';
function App(){  
  return (
      <div className="App">
         <Header />
         {/*Main content*/}
         <Body />
         {/*footer*/}
      </div>
    )
  }

export default App; 
