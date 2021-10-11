import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app-wrap">
          <Header />
          <Switch>
            <Route exact path="/"> <Home /> </Route>
            {/*<Route path="/movies"> <Movies /> </Route>
            <Route path="/showtime"> <Showtime /> </Route>
            <Route path="/theaters"> <Theaters /> </Route>
            <Route path="/news"> <News /> </Route>
            <Route path="/contact"> <Contact /> </Route>*/}
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
    
  );
}

export default App;
