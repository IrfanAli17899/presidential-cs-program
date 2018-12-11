import React, { Component } from "react"
import "./DetailBox.css";
import linkedinIcon from "../../../assets/linkedin-icon.png";
import facebookIcon from "../../../assets/fb-logo.png";
import twiterIcon from "../../../assets/twitter-icon.png";
import KaziRahatAli from "../../../assets/members-committee/KaziRahatAli.png";
import HunaidLakhani from "../../../assets/members-committee/HunaidLakhani.jpg";
import ZiaKhan from "../../../assets/members-committee/ZiaKhan.jpg";
import SulaimanMehdi from "../../../assets/members-committee/SulaimanMehdi.jpeg";
import YousufLakhani from "../../../assets/members-committee/YousufLakhani.jpeg";

class Box extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="con-can col-lg-4 col-sm-6 mt-5 d-flex justify-content-center align-items-center">
                            <div className="my-box">
                               <div className="circle-parent"><div className="card-img" style={{ backgroundImage: `url(${KaziRahatAli})` }}></div>
                               </div> 
                               <h1 className="partner-head">Kazi Rahat Ali</h1>
                                <p className="partner-intro">General Secretary PIAIC</p>
                                <div className="my-icons">
                                <ul>
                                    <li>
                                    {" "}
                                    <a target="_blank" rel="noopener noreferrer" href="">
                                        <img alt="fb-icon"  className="span" src={facebookIcon} />
                                    </a>
                                    </li>
                                    <li>
                                    {" "}
                                    <a target="_blank" rel="noopener noreferrer" href="">
                                        <img alt="twitter-icon" className="span" src={twiterIcon} />
                                    </a>
                                    </li>
                                    <li>
                                    {" "}
                                    <a target="_blank" rel="noopener noreferrer" href="">
                                        <img alt="linkedin-icon" className="span" src={linkedinIcon} />
                                    </a>
                                    </li>
                                </ul>

                                </div>

                            </div>
                        </div>





                         <div className="con-can col-lg-4 col-sm-6 mt-5 d-flex justify-content-center align-items-center">
                            <div className="my-box">
                               <div className="circle-parent"><div className="card-img" style={{ backgroundImage: `url(${ZiaKhan})` }}></div>
                               </div> 
                               <h1 className="partner-head" >Zia Ullah Khan</h1>
                               <p className="partner-intro">Founcder & CEO - Panacloud</p>
                                <div className="my-icons">
                                <ul>
                                    <li>
                                    {" "}
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/ziakhan">
                                        <img
                                        alt="fb-icon"
                                        className="span"
                                        src={facebookIcon}
                                        />
                                    </a>
                                    </li>
                                    <li>
                                    {" "}
                                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ziakhan">
                                        <img
                                        alt="twitter-icon"
                                        className="span"
                                        src={twiterIcon}
                                        />
                                    </a>
                                    </li>
                                    <li>
                                    {" "}
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ziaukhan/">
                                        <img
                                        alt="linkedin-icon"
                                        className="span"
                                        src={linkedinIcon}
                                        />
                                    </a>
                                    </li>
                            </ul>
                                </div>

                            </div>
                        </div>







                         <div className="con-can col-lg-4 col-sm-6 mt-5 d-flex justify-content-center align-items-center">
                            <div className="my-box">
                               <div className="circle-parent"><div className="card-img" style={{ backgroundImage: `url(${SulaimanMehdi})` }}></div>
                               </div> 
                                <h1 className="partner-head">Sulaiman Mehdi</h1>
                                <p className="partner-intro">Chairman of The Board - Pakistan Stock Exchange</p>
                                <div className="my-icons">

                                    <ul>
                                        <li>
                                        {" "}
                                        <a target="_blank" rel="noopener noreferrer" href="">
                                            <img alt="fb-icon" className="span" src={facebookIcon} />
                                        </a>
                                        </li>
                                        <li>
                                        {" "}
                                        <a target="_blank" rel="noopener noreferrer" href="">
                                            <img alt="twitter-icon" className="span" src={twiterIcon} />
                                        </a>
                                        </li>
                                        <li>
                                        {" "}
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sulaiman-s-mehdi-fcis-44275773/">
                                            <img
                                            alt="linkedin-icon"
                                            className="span"
                                            src={linkedinIcon}
                                            />
                                        </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>






                         <div className="con-can col-lg-4 col-sm-6 mt-5 d-flex justify-content-center align-items-center">
                            <div className="my-box">
                               <div className="circle-parent"><div className="card-img" style={{ backgroundImage: `url(${HunaidLakhani})` }}></div>
                               </div> 
                               <h1 className="partner-head">Hunaid Lakhani</h1>
                                <p className="partner-intro">Chancellor - Iqra University</p>
                                <div className="my-icons">

                                    <ul>
                                        <li>
                                        {" "}
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Hunaid.H.Lakhani/">
                                            <img
                                            alt="fb-icon"
                                            className="span"
                                            src={facebookIcon}
                                            />
                                        </a>
                                        </li>
                                        <li>
                                        {" "}
                                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Hunaid_Lakhani">
                                            <img
                                            alt="twitter-icon"
                                            className="span"
                                            src={twiterIcon}
                                            />
                                        </a>
                                        </li>
                                        <li>
                                        {" "}
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/hunaid-lakhani-00728014/">
                                            <img
                                            alt="linkedin-icon"
                                            className="span"
                                            src={linkedinIcon}
                                            />
                                        </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>







                         <div className="con-can col-lg-4 col-sm-6 mt-5 d-flex justify-content-center align-items-center">
                            <div className="my-box">
                               <div className="circle-parent"><div className="card-img" style={{ backgroundImage: `url(${YousufLakhani})` }}></div>
                               </div> 
                               <h1 className="partner-head">Yousuf Lakhani</h1>
                                <p className="partner-intro">
                                    President - Saylani Welfare Trust
                                    <br />
                                    <br />
                                </p>
                                <div className="my-icons">

                                    <ul>
                                        <li>
                                        {" "}
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/yousuf.lakhani.3994">
                                            <img
                                            alt="fb-icon"
                                            className="span"
                                            src={facebookIcon}
                                            />
                                        </a>
                                        </li>
                                        <li>
                                        {" "}
                                        <a target="_blank" rel="noopener noreferrer" href="">
                                            <img alt="twitter-icon" className="span" src={twiterIcon} />
                                        </a>
                                        </li>
                                        <li>
                                        {" "}
                                        <a target="_blank" rel="noopener noreferrer" href="">
                                            <img alt="linkedin-icon" className="span" src={linkedinIcon} />
                                        </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>






                         
                    </div>
                </div>
            </div>
        )
    }

}
export default Box;