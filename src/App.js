import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import AboutUs from "./view/pages/aboutus/AboutUs";
import Auto from "./view/pages/auto/Auto";
import Card from "./view/card/Card";
import Main from "./view/main/Main";
import Partners from "./view/pages/partners/Partners";
import Help from "./view/pages/help/Help";
import CardMap from "./view/cardMap/CardMap";
import Register from "./view/pages/register/Register";
import WindowNews from "./components/windowNews/WindowNews";
import NewsThree from "./view/pages/newsThree/NewsThree";
import NewSecond from "./view/pages/newSecond/NewSecond"
import NewsFour from "./view/pages/newsFour/NewsFour";
import { PrivateRoute } from "./router/privateRoute/PrivateRoute";
import BusinessCenter from "./view/pages/businessCenter/BusinessCenter";
import Barter from "./view/pages/barter/Barter";
import { Link } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import BurgerMenu from "./components/burgerMenu/BurgerMenu"


function App() {
  return (
    <Router>
      <Nav />
      <BurgerMenu />
      <div className="container">
        <Switch>
          <PrivateRoute path="/dashboard" Component={() => <Dashboard/> } />
          <Route path="/barter">
          <Barter />
        </Route>
        <Route path="/newsFour">
          <NewsFour />
        </Route>
        <Route path="/newsThree">
            <NewsThree />
          </Route>
        <Route path="/newSecond">
            <NewSecond />
          </Route>
        <Route path="/news">
            <WindowNews />
          </Route>
          <Route path="/business_center">
            <BusinessCenter />
          </Route>
          <Route path="/auto">
            <Auto />
          </Route>
          <Route path="/aboutus">
            <AboutUs />
          </Route>
          <Route path="/partners">
            <Partners />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
          <Route path="/cardmap/:id">
            <CardMap />
          </Route>
          <Route path="/register">
            <Register />
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
