import './App.css';
import Count from './Components/Count';
function App() {
  return (
    <div className="App">
      <Count name="Count-1" onClick={() => {alert('hvefuy we')}}>This is Count 1</Count>
    </div>
  );
}

export default App;
