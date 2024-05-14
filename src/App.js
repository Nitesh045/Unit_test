import logo from './logo.svg';
import './App.css';
import { Counter } from './Component/Counter';
import { UseRef } from './Component/UseRef';
import { createContext } from 'react';
import { MyComponent } from './Component/Consumer';
import { MyProvider } from './Component/UseContext';
 
function App() {
  
  return (
    <div className="App">
      <Counter/>
      <UseRef/>
    </div>
  );
}

export default App;
