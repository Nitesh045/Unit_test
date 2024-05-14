import logo from './logo.svg';
import './App.css';
import { Counter } from './Component/Counter';
import { UseRef } from './Component/UseRef';

function App() {
  return (
    <div className="App">
      <Counter/>
      <UseRef/>
    </div>
  );
}

export default App;
