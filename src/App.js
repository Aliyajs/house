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

function App() {
  return (
    <Router>
      <Nav />
      <div className="App">
        <Switch>
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
          <Route path="/cardmap">
            <CardMap />
          </Route>
          <Route path="/">
            <Header />
            <Main />
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
