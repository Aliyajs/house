import Card  from './view/card/Card';
import './App.css';
import Footer from './components/footer/Footer';
import Main from './view/main/Main';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AboutUs from './view/aboutUs/AboutUs';
import Auto from './view/auto/Auto'
import Partner from './pages/partner/Partner';
import Help from './pages/help/Help';
import CardMap from './pages/cardMap/CardMap';

function App() {
  return (
    <Router>
      <Nav />
      <div className="App">
        <Switch>
           
        <Route path="/help">
            <Help/>
          </Route>
        <Route path="/partner">
            <Partner/>
          </Route>
          <Route path="/auto">
            <Auto />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route to="/card">
            <CardMap/>
          </Route>
          <Route path="/">
            <Header />
          </Route>
          <Route path="*">
            404
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
