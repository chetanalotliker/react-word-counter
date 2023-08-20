import './App.css';
import react, { useState } from 'react';
import Navbar from './Component/Navbar';
import Counter from './Component/Counter';

function App() {
  const [searchString, setSearchString] = useState('hi');
  return (
    <div className="App">
      <Navbar />
      <Counter />
    </div>
  );
}

export default App;
