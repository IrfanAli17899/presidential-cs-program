import React, { Component } from 'react';
import './HowItWorks.css';
import pakMap from '../../assets/pakMap.png';

class HowItWorks extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="container-fluid hiw-cont">
        <br />
        <div className="row hiw-box1 ">
          <div className="col-sm-2  d-flex justify-content-center align-items-center"><div className="countButton d-flex justify-content-center align-items-center">1</div></div>
          <div className="col-sm-8 mt-4 mt-sm-0  d-flex justify-content-center align-items-center"><div><p className="para1">PIAIC will launch classes in the following locations, one city at a time, in the following order</p></div></div>
          <div className="col-sm-2 "></div>
        </div>
        <div className="row hiw-box1-1">
          <div className="col-md-6 mt-4 mt-sm-0 d-flex justify-content-center align-items-center">
              <div>
                <img className=" pakMap " src={pakMap} />
              </div>
           </div>
          <div className="col-md-6 mt-4 mt-sm-0 d-flex justify-content-center align-items-center">
            <div>
              <div className="hiw-table-box">
                <table>
                  <tr>
                    <td></td>
                    <td className="second-col-area"><p>City by City Roadmap</p></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="first-col-count"><p>1<div className="hiw-dot"></div></p></td>
                    <td className="second-col-area"><p className="col-area-active">Karachi</p></td>
                    <td className="third-col-status"><p>Now we are serving in Karachi</p></td>
                  </tr>
                  <tr>
                    <td className="first-col-count"><p>2<span className="hiw-dot"></span></p></td>
                    <td className="second-col-area"><p>Islamabad</p></td>
                    <td className="third-col-status"><p>Coming Soon</p></td>
                  </tr>
                  <tr>
                    <td className="first-col-count"><p>3<span className="hiw-dot"></span></p></td>
                    <td className="second-col-area"><p>Peshawar</p></td>
                    <td className="third-col-status"><p>Coming Soon</p> </td>
                  </tr>
                  <tr>
                    <td className="first-col-count"><p>4<span className="hiw-dot"></span></p></td>
                    <td className="second-col-area"><p>Lahore</p></td>
                    <td className="third-col-status"><p>Coming Soon</p></td>
                  </tr>
                  <tr>
                    <td className="first-col-count"><p>5<span className="hiw-dot"></span></p></td>
                    <td className="second-col-area"><p>Quetta</p></td>
                    <td className="third-col-status"><p>Coming Soon</p></td>
                  </tr>
                </table>
                </div>
            </div>
          </div>
        </div>

        <div className="row hiw-box2 ">
          <div className="col-sm-2  d-flex justify-content-center align-items-center"><div className="countButton d-flex justify-content-center align-items-center">2</div></div>
          <div className="col-sm-8 mt-4 mt-sm-0  d-flex justify-content-center align-items-center"><div><p className="para1">To participate in the program and become eligible for the most prestigious credentials for 
AI, Cloud, and Blockchain technologies in the world, students must complete the following process</p></div></div>
          <div className="col-sm-2 "></div>
        </div>

        <div className="row hiw-box3 ">
          <div className="col-sm-2  d-flex justify-content-center align-items-center"><div className="countButton d-flex justify-content-center align-items-center">3</div></div>
          <div className="col-sm-8 mt-4 mt-sm-0  d-flex justify-content-center align-items-center"><div><p className="para1">All programs are one year long in duration. Each program is divided into four quarters (12 weeks each). Classes are held once a week. In the initial 
stages, classes will be held only on Sundays. There will 3 sections of classes available, including Artificial Intelligence, Cloud Native Computing, and 
Blockchain. Each class will be 3 hours in duration per week, for a total of 36 hours per quarter or 144 hours for the entire year.</p></div></div>
          <div className="col-sm-2 "></div>
        </div>

        <div className="row hiw-box4 ">
          <div className="col-sm-2  d-flex justify-content-center align-items-center"><div className="countButton d-flex justify-content-center align-items-center">4</div></div>
          <div className="col-sm-8 mt-4 mt-sm-0  d-flex justify-content-center align-items-center"><div><p className="para1">Those students who wish to participate in the program online can check the distance learning option in the application form. Please note that distance learning students must also take proctored exams on site, just like the onsite students.
<br />
<br />
The fee structure for onsite students is PKR 1,000 per month for 12 months, payable in 4 installments of PKR 3,000, before the start of each quarter.
<br />
<br />
The fee structure for distance learning students is PKR 500 per month for 12 months, payable in 4 installments of PKR 1,500, before the start of each quarter.</p></div></div>
          <div className="col-sm-2 "></div>
        </div>

        <div className="row hiw-box5 ">
          <div className="col-sm-2  d-flex justify-content-center align-items-center"><div className="countButton d-flex justify-content-center align-items-center">5</div></div>
          <div className="col-sm-8 mt-4 mt-sm-0  d-flex justify-content-center align-items-center"><div><p className="para1">Please note, all fees will be collected by Saylani Welfare Trust, the most trusted NGO in Pakistan. Saylani has strict audit processes already in place to ensure proper accountability of funds.</p></div></div>
          <div className="col-sm-2 "></div>
        </div>

        <div className="row hiw-box6 ">
          <div className="col-sm-2  d-flex justify-content-center align-items-center"><div className="countButton d-flex justify-content-center align-items-center">6</div></div>
          <div className="col-sm-8 mt-4 mt-sm-0  d-flex justify-content-center align-items-center"><div><p className="para1">Please note, this is a highly prestigious program. Due to the high level of difficulty, only 10% of students will be awarded the PIAIC certifications signed by the President of the Islamic Republic of Pakistan</p></div></div>
          <div className="col-sm-2 "></div>
        </div>
      </div>
     );
  }
}
 
export default HowItWorks;