import React, { Component } from 'react';
import "./cloudNativeStyle.css"
import Banner from "../Banner/Banner"
import Quarters from "../Quarter/Quarter"
import Blog from "../Blog/Blog"



import introduction from "../../assets/CloudNative/introduction.png"
import linux from "../../assets/CloudNative/linux-logo.png"
import docker from "../../assets/CloudNative/docker.png"
import js from "../../assets/CloudNative/js-logo.png"
import nodejs from "../../assets/CloudNative/nodejs.png"
import git from "../../assets/CloudNative/Git-Icon.png"
import Ansible from "../../assets/CloudNative/Ansible.png"
import kuber from "../../assets/CloudNative/Kubernetes.png"
import aws from "../../assets/CloudNative/aws-logo.png"


class CloudNative extends Component {
  render() {
    return (
      <div className="Artificial-Intelligence-Page">
        <div className="container-fluid p-0">
        <Banner
          className="Rectangle-67 cl-b"
          heading1="Cloud Native Computing & "
          heading2="Amazon Web Services (AWS) Specialist" 
          tagline1=" A ONE  YEAR CLOUD  COMPUTING PROGRAM  DESIGNED  FORABSOLUTE  BEGINNERS."
          tagline2="GETTING PAKISTAN READY FOR THE NEW ERA OF MICROSERVICES AND MULTI-CLOUD NATIVE COMPUTING."
          courseLine = "A four-quarter cloud computing program."
        />


        <Quarters
            Q1 = {
              {className:"Rectangle-68 c1",para:"Cloud  Native  Computing Foundations"}
            }
            Q2={
              {className:"Rectangle-68 c2",para:"Developing  Cloud  Native Microservices"}
            }
            Q3 = {
              {className:"Rectangle-68 c3",para:"Kubernetes  in  Practice"}
            }
            Q4={
              {className:"Rectangle-68 c4",para:"AWS  Application  Development"}
            }
          />



          <div className="container my-container main-container">
            <div className="box-mega-container cloud">
              <hr />
              <div className="row">
                <div className="col-sm-12">
                <h1 className="sec-head-2">Detailed Program Structure</h1>
                <div className="circle-line"></div>

                  <Blog 
                    left = {true}
                    data = {
                      {
                        image:introduction,
                        number:"1A",
                        className:"transparent cl-1-t",
                        heading:"Introduction to Cloud Native Computing",
                        para:"Cloud native computing uses open-source software stacks to deploy applications as microservices, packaging each part into its own container and dynamically orchestrating those containers to optimize resource utilization. In the last 15 years, cloud application delivery has moved from being bound to physical servers to running on virtual machines with a full operating system and now to containers with Docker, where developers can specify every aspect of deployment.",
                        para2:"The move has also been a shift from a heavyweight application deployment cloud model to a lightweight cloud native model that takes less time to start up and deploy applications. Additionally, there has been a move from being bound to a single, closed-source vendor to an open-source model with multiple vendors, resulting in less risk of lock-in and more choice. All the major cloud providers such as AWS, Azure, Google Cloud Platform, etc. have adopted this cloud native approach. In this module we will learn about the history, current status and future of cloud native computing."
                      }
                    }
                  />
                  <Blog 
                    left = {false}
                    data = {
                      {
                        image:linux,
                        number:"1B",
                        className:"transparent cl-1-t",
                        heading:" Introduction to Linux and Bashusing Python",
                        para:"Linux containers are poised to take over the world; we will start our course with an introduction of Linux and the command line. For many non-technical people, the command line (also referred to as CLI, Terminal, bash, or shell) is a place of mystery. However, you only have to know a handful of basic commands to start feeling comfortable. In this module we will cover the basic commands to get you started."
                      }
                    }
                  />
                  
                   <Blog 
                    left = {true}
                    data = {
                      {
                        image:docker,
                        number:"1C",
                        className:"transparent cl-1-t",
                        heading:"Docker Deep Dive",
                        para:"This course provides a soup-to-nuts learning experience for core Docker technologies, including the Docker Engine, Images, Containers, Registries, Networking, Storage, and more. All of the behind the scenes theory is explained, and all concepts are clearly demonstrated on the command line. No prior knowledge of Docker or Linux is required."
                      }
                    }
                  />
                  <Blog 
                    left = {false}
                    data = {
                      {
                        image:js,
                        number:"1D",
                        className:"transparent cl-1-t",
                        heading:"JavaScript/TypeScript Programming",
                        para:"JavaScript is the default language of the web and the first universal programming language. In this module, students will dig through all the genuinely elegant parts of JavaScript, including syntax, objects, functions, inheritance, arrays, methods, etc. This module will build a solid foundation in functional and object-oriented programming using JavaScript (ES 2016) and TypeScript using Node.js. Assuming no prior programming experience on the part of the student, this module starts by focusing on the fundamentals of composing code with JavaScript. Introduction to only server based JavaScript/TypeScript is covered i.e. Node.js. Students will also learn about the syntax and structure of the language including operators and expressions, control structures, methods, and arrays using Node."
                      } }
                  />
                  <Blog 
                    left = {true}
                    data = {
                      {
                        image:nodejs,
                        number:"2A",
                        className:"grey cl-2-t",
                        heading:" Developing Microservices using Node.js and Express",
                        para:"This module includes how to build microservices using Node.js. It starts by introducing Node’s powerful traits and shows students how they map to the features of microservices using JavaScript. Students will explore key development techniques, meet the rich ecosystem of companion tools and libraries, and get a glimpse into its inner workings. In recent years, REST (REpresentational State Transfer) has emerged as the standard architectural design for web services and web APIs. In this module, students will see how easy it is to create a RESTful web service using Node.js, TypeScript and the Express micro-framework. Students will also learn gRPC and GraphQL based microservices. By the end of the module, students will be able to use JavaScript/Typescript to build a Node microservice and know how to test it, hook it up to a database, and automate the development process."
                      } }
                  />
                   <Blog 
                    left = {false}
                    data = {
                      {
                        image:git,
                        number:"2B",
                        className:"grey cl-2-t",
                        heading:"Version Control with Git",
                        para:"You won’t find a top programmer, cloud developer, or AI engineer who doesn’t use version control. This is true because version control helps developers produce better results and makes collaboration easy. Around the world, in teams both large and small, Git is an essential part of the toolchain. This module covers Git and Github."
                      }}
                  />
                  
                  <Blog 
                    left = {true}
                    data = {
                      {
                        image:Ansible,
                        number:"2C",
                        className:"grey cl-2-t",
                        heading:" Cloud Automation using Ansible  ",
                        para:"Ansible is an open-source IT automation engine which can remove drudgery from work life and will also dramatically improve the scalability, consistency, and reliability of your IT environment. In this module, students will start to explore how to automate repetitive cloud administration tasks using Ansible."
                      }
                    }
                  />
                  <Blog 
                    left = {false}
                    data = {
                      {
                        image:kuber,
                        number:"3A",
                        className:"grey cl-3-t",
                        heading:" Kubernetes in Practice",
                        para:"The Kubernetes container orchestration system safely manages the structure and flow of a distributed application, organizing containers and services for maximum efficiency. Kubernetes serves as an operating system for your clusters, eliminating the need to factor the underlying network and server infrastructure into your designs. In this quarter, students will learn to use Kubernetes to deploy container-based distributed applications. The module will start with an overview of Docker and Kubernetes before building the first Kubernetes cluster. We’ll gradually expand the student's initial application, adding features and deepening knowledge of Kubernetes architecture and operation. Students will explore high-value topics like monitoring, tuning, and scaling. By the end of the quarter, students will be able to appear in the Certified Kubernetes Application Developer (CKAD) exam."
                      }
                    }
                  />
                     <Blog 
                    left = {true}
                    data = {
                      {
                        image:aws,
                        number:"4A",
                        className:"grey cl-3-t",
                        heading:"Amazon Web Services Application Development",
                        para:"In this quarter, students will develop an understanding of core AWS services, uses, and basic AWS architecture best practices. Students will develop proficiency in developing, deploying, and debugging cloud-based applications using AWS. Students will also develop the ability to use the AWS service APIs, AWS CLI, and SDKs to write applications and gain an understanding of the AWS shared responsibility model. Students will also focus on understanding of application lifecycle management, ability to use a CI/CD pipeline to deploy applications on AWS, and ability to write code using AWS security best practices. Proficiency, writing code for serverless applications, and understanding of the use of containers in the development process will also be covered in detail. By the end of the quarter students will be able to appear in the AWS Certified Developer – Associate exam."
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

export default CloudNative;
