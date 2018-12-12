import React, { Component } from "react";
import { Route, Router, Switch } from "react-router-dom";
import Home from "./components/Home/home";
// import About from './components/About/About';
import About from "./components/About/about";
import Form from "./components/Form/form";
import CloudNative from "./components/CloudNative/cloudNative";
import AI from "./components/Ai/ai";
import Navbar from "./components/Navbar/Navbar";
// import Footer from './components/Footer/Footer';
import Copyright from "./components/Copyright/Copyright";
import NotFound from "./components/404/404"
import Contact from "../src/components/ContactUs/ContactUs";
import BlockChain from "./components/BlockChain/BlockChain";
import history from "./History";
import ManagementCommittee from "./components/ManagementCommittee/ManagementCommittee";
import Idcard from "./components/idCard/idcard";
//import FacebookAuth from './components/FacebookAuth/facebookAuth';
import HowItWorks from './components/HowItWorks/HowItWorks'
import AlreadyApplied from './components/AlreadyApplied/alreadyApplied'
import ReactGA from "react-ga";

// React Google Analytics Initializing
ReactGA.initialize('UA-130584601-1');


class Routers extends Component {

  componentDidMount() {
    ReactGA.pageview(window.location.pathname);
    history.listen((location => {
      ReactGA.pageview(window.location.pathname)
    }));
  }
  render() {
    return (
      <Router history={history}>
        <div>

          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/block-chain" component={BlockChain} />
            <Route exact path="/artificial-inteligence" component={AI} />
            <Route exact path="/cloud-native" component={CloudNative} />
            <Route exact path="/subscribe" component={Contact} />
            <Route exact path="/howitworks" component={HowItWorks} />
            <Route exact path="/managementcommittee" component={ManagementCommittee} />
            <Route exact path="/idcard" component={Idcard} />
            <Route exact path="/apply" component={Form} />
            <Route exact path="/already-applied" component={AlreadyApplied} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Copyright />
        </div>

      </Router>
    );
  }
}

export default Routers;
