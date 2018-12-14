/*eslint-disable*/

import React, { Component } from 'react';
import './home.css';
import News from './News/News';
import Programs from './Programs/Programs';
import Footer from '../Footer/Footer';
import HomeVideo from './HomeVideo/HomeVideo';
import Countdown from './Countdown/Countdown';
import SupportingPartners from './SupportingPartners/SupportingPartners';
import Cover from "../Cover/Cover"

import eventGroupPhoto from '../../assets/piaic.jpg'

import Box from "./DetailBox/DetailBox"




class Home extends Component {
  constructor() {
    super();
    this.state = {
      showed: JSON.parse(localStorage.getItem("showed")) ?
       true : false
    }
  }
  cover = () => {
    this.CoverPage.className += " slide "
    localStorage.setItem("showed",true);
  }
  render() {
    const currentDate = new Date();
    const {showed} = this.state;
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    return (
      <div>
        
      { /* !showed && <Cover cover={this.cover} parentThis = {this} /> */}
     <div className="App">
        <HomeVideo />
        <Programs />

        <div className="groupImageDiv">
          <img className="groupImage" src={eventGroupPhoto} />
        </div>
        {/*
          <Box />
          */
        }
        <div className="my-gap"></div>

        <SupportingPartners />
        <Footer />
      </div >
      </div>
    );
  }
}

export default Home;
