import './App.css';
import Home from './Components/Home';
import Header from './Components/Header.js'

function App() {
  return (
    <div className="app">
      <div className="app-wrap">
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
