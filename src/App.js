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
import WindowNews from './pages/window/WindowNews';
import Register from './pages/register/Register';
import NewSecond from './pages/newSecond/NewSecond';
import NewsThree from './pages/newsThree/NewsThree';
import NewsFour from './pages/newsFour/NewsFour';
import BusinessCenter from './pages/bisnessCenter/BusinessCenter';
import Barter from './pages/barter/Barter';
import BurgerMenu from './components/burgerMenu/BurgerMenu';
import { Dashboard } from '@material-ui/icons';

function App() {
  return (
    <Router>
      <Nav />
      <BurgerMenu/>
      <div className="App">
        <Switch>
        <Route path="/dashboard">
            <Dashboard/>
          </Route>
        <Route path="/barter">
            <Barter/>
          </Route>
        <Route path="/newsFour">
            <NewsFour/>
          </Route>
        <Route path="/newsThree">
            <NewsThree/>
          </Route>
        <Route path="/newSecond">
            <NewSecond/>
          </Route>
        <Route path="/news">
            <WindowNews/>
          </Route>
          <Route path="/business_center">
            <BusinessCenter/>
          </Route>
          <Route path="/auto">
            <Auto />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/partner">
            <Partner />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
          <Route path="/cardmap/:id">
            <CardMap />
          </Route>
          <Route path="/register">
            <Register/>
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
