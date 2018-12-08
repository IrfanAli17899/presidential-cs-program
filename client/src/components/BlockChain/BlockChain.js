import React, { Component } from 'react';
import "./BlockChain.css"
import Banner from "../Banner/Banner"
import Quarters from "../Quarter/Quarter"
import Blog from "../Blog/Blog"



import bitcoin from "../../assets/BlockChain/1.jpg"
import coins from "../../assets/BlockChain/block2.png"
import bctech from "../../assets/BlockChain/block3.jpg"
import iot from "../../assets/BlockChain/block4.jpg"
import hyperledger from "../../assets/BlockChain/block5.png"
import bitcoin2 from "../../assets/BlockChain/block6.png"
import contract from "../../assets/BlockChain/block7.png"
import solidity from "../../assets/BlockChain/block8.jpg"
import web from "../../assets/BlockChain/block9.jpeg"
import blockchain from "../../assets/BlockChain/block10.jpg"
import truffle from "../../assets/BlockChain/block11.png"
import baas from "../../assets/BlockChain/block12.jpg"
import ico from "../../assets/BlockChain/block13.jpeg"
import currency from "../../assets/BlockChain/block14.jpg"















class BlockChain extends Component {
  render() {
    return (
      <div className="Artificial-Intelligence-Page">
        <div className="container-fluid p-0">
        <Banner
          className="Rectangle-67 bc"
          heading1="BLOCKCHAIN  SPECIALIST"
          tagline1="A ONE YEAR BLOCKCHAIN PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS 
          GETTING PAKISTAN READY FOR THE NEW ERA OF BLOCKCHAIN, FINTECH AND SMART CONTRACTS"
          courseLine = {`Four Quarters of Blockchain Course Work`}
        />


        <Quarters
            Q1 = {
              {className:"Rectangle-68 b1",para:"Foundations of Blockchain"}
            }
            Q2={
              {className:"Rectangle-68 b2",para:"Smart Contract Development"}
            }
            Q3 = {
              {className:"Rectangle-68 b3",para:"Dapp Development"}
            }
            Q4={
              {className:"Rectangle-68 b4",para:"Advanced Blockchain Topics"}
            }
          />



          <div className="container my-container main-container">
            <div className="box-mega-container cloud">
              <hr />
              <div className="row">
                <div className="col-sm-12">
                <div className="bc-circle-line"></div>

                  <Blog 
                    left = {true}
                    data = {
                      {
                        image:bitcoin,
                        number:"1A",
                        className:"transparent b-1-t",
                        heading:"Digital Money, Bitcoin and Blockchain",
                        para:"In this module, students will get an introduction to digital money, bitcoin and the blockchain. Students will learn about trestles systems and proof of work. Students will also learn the difference between private, consortium, and public blockchain networks. This module will also provide an introduction to hashing and cryptography."}
                    }
                  />
                  <Blog 
                    left = {false}
                    data = {
                      {
                        image:coins,
                        number:"1B",
                        className:"transparent b-1-t",
                        heading:"Crypto Tokens",
                        para:"In this module, students will learn about crypto tokens, how intrinsic tokens come into existence, how bitcoins, ripples, ethereal, and NXT come into existence. Students will also learn the difference between utility and security tokens. This module will also cover the legal implications of token classification. Students will also learn the eight categories of tokens. In this module, students will learn how to create their own utility tokens."
                      }}
                  />
                  
                   <Blog 
                    left = {true}
                    data = {
                      {
                        image:bctech,
                        number:"1C",
                        className:"transparent b-1-t",
                        heading:"Blockchain Revolution",
                        para:`In this module, students will learn how permissionless systems work. Students will also learn about enterprise blockchain and the future of finance. This module will cover how blockchain can disrupt industries including finance, banking, insurance, and even music.`}
                    }
                  />
                  <Blog 
                    left = {false}
                    data = {
                      {
                        image:iot,
                        number:"1D",
                        className:"transparent b-1-t",
                        heading:" Introduction to Decentralized Apps",
                        para:"In this module, students will learn about Ethereum, Decentralized Apps, Smart Contracts, and the EVM. Students will learn the benefits of the Ethereum Decentralized Platform and the fourth generation blockchain."}
                      }
                  />
                   <Blog 
                    left = {true}
                    data = {
                      {
                        image:hyperledger,
                        number:"1E",
                        className:"transparent b-1-t",
                        heading:"Ethereum and Hyperledger Fabric Basics",
                        para:" In this module, students will learn about blockchain nodes and how to run them. Students will also learn about the Ethereum ecosystem, Mist, and Faucets. After this completing this module, students will be able to compile, deploy and instantiate contracts. Students will also have an understanding of the different stages of a contract deployment."
                      }}
                  />
                  <Blog 
                    left = {false}
                    data = {
                      {
                        image:bitcoin2,
                        number:"1F",
                        className:"transparent b-1-t",
                        heading:"Crypto Mining and Operations",
                        para:"In this module students will learn the process by which Bitcoins are mined and what roles do miners play in creation of Bitcoins.  The details of this module would help students understand in great details how various mining strategies are applied by various miners and the powerful hardware custom built for mining.  The students would also learn about the role of consensus in mining and the 51% attacks, how the incentives of mining attract miners and the energy consumption and ecological impact of mining."}}
                  />
                   <Blog 
                    left = {true}
                    data = {
                      {
                        image:contract,
                        number:"2A",
                        className:"grey b-2-t",
                        heading:" Introduction to Smart Contracts",
                        para:`In this module students will be introduced to the programming and development side of Blockchain, especially that of Ethereum.  The students will learn how to use a Remix IDE to program in Solidity.  The students will go over various Blockchain concepts again such as Blockchain Basics, Blockchain Transactions, and Blockchain Blocks.  The students will learn the infrastructural concepts of the Ethereum Blockchain, such as The Ethereum Virtual Machine, how Ethereum
                        Accounts are formed and how Ethereum Transactions occur.  They will also go over other concepts like Gas, Storage, Memory and the Stack, Instruction Set, Message Calls, Delegatecall / Callcode and Libraries, Logs, Creating contracts, and Self-destruct.
                        `
                      }
                    }
                  />
                  
                  <Blog 
                    left = {false}
                    data = {
                      {
                        image:solidity,
                        number:"2B",
                        className:"grey b-2-t",
                        heading:" Solidity in Depth",
                        para:`In this module students will take an in depth look at Solidity language and learn about concepts like mapping, data types, events, operators, parameters, control structures, and error handling.Students will also begin creating Solidity contracts, event handling and layout of memory and storage variables.`
                      }
                    }
                  />
                  <Blog 
                    left = {true}
                    data = {
                      {
                        image:web,
                        number:"3A",
                        className:"grey b-3-t",
                        heading:"HTML, CSS, and JavaScriptCrash Course",
                        para:`In this module the students finally move over to Dapp development.  To accomodate Dapp development students will be given a crash course in HTML, CSS, and JavaScript and taught about various concepts of javascript in depth to help understand the interaction of Solidity and Web3.js`
                      }
                    }
                  />
                     <Blog 
                    left = {false}
                    data = {
                      {
                        image:blockchain,
                        number:"3B",
                        className:"grey b-3-t",
                        heading:"Blockchain WebApplications",
                        para:`The students will now be ready to develop a front-end for Solidity contracts.  They’ll be taught about the Basics of React, REST API’s, in Node.js, Using Nginx to host Single Page Apps, and using Docker to deploy web apps in the cloud.`
                      }
                    }
                  />
                   <Blog 
                    left = {true}
                    data = {
                      {
                        image:truffle,
                        number:"3C",
                        className:"grey b-3-t",
                        heading:"Web3 & Truffle",
                        para:`In this module the students will learn how to to work with Web3 & Truffle.   They’ll also learn about toolkit to aid development of decentralised applications. This course introduces the two most currently relevant and covers everything from installation and setup to custom
                        configuration and scripting.  Building an interface to interact with a smart contract.Setting up event-driven interfaces.  It also exposes the students to Adapting Truffle’s default behavior and Writing functional tests for smart contract.
                        `
                      }
                    }
                  />
                   <Blog 
                    left = {false}
                    data = {
                      {
                        image:baas,
                        number:"4A",
                        className:"grey b-3-t",
                        heading:" BaaS (Blockchain-as-a-Service)",
                        para:`The students will begin to finally finish off will very high level concepts in Solidity and Blockchain, such as BaaS (Blockchain-as-a-Service).  Working with Azure Blockchain as a Service, Deploy an Ethereum Consortium network on Azure, DevOps for Blockchains on Azure, 
                        Trying out the Visual Studio Code extension for Smart Contracts, and Building Dapps with Visual Studio.
                        `
                      }
                    }
                  />
                  <Blog 
                    left = {true}
                    data = {
                      {
                        image:ico,
                        number:"4B",
                        className:"grey b-3-t",
                        heading:"The Art of Initial Coin Offering (ICO)",
                        para:`In this module the students will move over the the business side of Blockchain and learn about ICO.  They will learn what is an ICO, how to create and verify
                        Your Altcoin, What are steps in launching a ICO, how to write an ICO White Paper and how to do ICO marketing?
                        `
                      }
                    }
                  />
                  <Blog 
                    left = {false}
                    data = {
                      {
                        image:currency,
                        number:"4C",
                        className:"grey b-3-t",
                        heading:"Blockchain Projects for Islamic Finance -A Match Made in Heaven",
                        para:`In the last module of this course the students will also get an opportunity to look at the Blockchain Projects for
                        Islamic Finance.  They will learn about developing Sharia-Compliant Financial and Blockchain Products, 
                        applications of Smart Contracts in Islamic Finance, 
                        private Chains in Islamic Banking, Emirates “Cheque Chain”, Islamic Trade Finance, Capital Markets-Musharaka Mutanaqisa (Diminishing Partnerships), as well as Automatic Sharia Compliance and Commodity Murabaha.`
                      }
                    }
                  />
                   
                  
                  {/* <div className="btn-Grp">
                        
                        <button className="Rectangle-60 curr cl-cr" type="submit" >Download Curriculum</button>   
                        <button className="Rectangle-60 apply" type="submit" >Apply</button>                  


                  </div> */}
                </div>

                
              </div>
            </div>
          </div>


        </div>

        </div>
    );
  }
}

export default BlockChain;
