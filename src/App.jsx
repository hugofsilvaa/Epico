import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components//NavBar/Navbar";
import Home from "./components/Home/Home";
import Games from "./components/Games";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import Footer from "./components//Footer/Footer";
import Map from "./components/Map/Map";
import GameDetails from "./components/GameDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/games/:pageNumber' component={Games} />
        <Route path='/about' component={AboutUs} />
        <Route path='/contact' component={Contact} />
        <Route path='/map' component={Map} />
        <Route path='/game/:id' component={GameDetails} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
