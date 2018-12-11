import React, { Component } from 'react';
import AboutCard from "./AboutCard"
import "./main.css"
import Grid from '@material-ui/core/Grid';
import zk from  './img/zia.jpeg';
import sm from './img/sm.jpeg';
import aa from './img/aa.jpg';
import hl from './img/hl.jpg';

class About extends Component {

    render() {
        const x= this.state.members;
        return (
            <div className="conatiner">
            <div className="gradient">
    <Grid container spacing={24}>
        <Grid item xs={2}>
        <AboutCard img={x.aa.img} name={x.aa.name}  content={x.aa.content} />
        </Grid>
        <Grid item xs={2}>
        <AboutCard img={x.zk.img} name={x.zk.name} content={x.zk.content}/>
        </Grid>
        <Grid item xs={2}>
        <AboutCard img={x.qra.img} name={x.qra.name} content={x.qra.content} />
        </Grid>
        <Grid item xs={2}>
        <AboutCard img={x.hl.img} name={x.hl.name} content={x.hl.content}/>
        </Grid>
        <Grid item xs={2}>
        <AboutCard img={x.sm.img} name={x.sm.name} content={x.sm.content}/>
        </Grid>
        </Grid>
        </div>
        <h1>This is About page</h1>
        </div>
        );
    }

    state = {
        members:{
        zk:{
            name:"Ziaullah Khan",
            content:`More than eighteen years of experience in software architecture, design, development, implementation, and integration. Current focus is on web, mobile, I and blockchain application development. 
            Over fifteen years of experience in leading a not-for-profit educational movement. Taught computer science to over 10,000 students on weekends. 
            Triple Masters degrees in engineering (MSE), business (MBA), and accounting (MAC) from Arizona State University (ASU). Master of Arts (M.A.) in Economics from KU. Professional qualifications include Certified Public Accountant (CPA) and Certified Management Accountant (CMA). For eight consecutive years in 2007, 2008, 2009, 2010, 2011, 2012, 2013, and 2014 received the Microsoft’s Most Valuable Professional (MVP) Awards.`,
            img: zk
        },
        qra:{
            name:"Qazi Rehmat Ali",
            content:"Unknown",
            img:"n/a"
        },
        aa:{
            name:"Dr.Arif Alvi",
            content:`Dr. Arif Alvi is a politician, dentist and a parliamentarian.He acquired his dental degree BDS (Dentistry) from de'Montmonrency College of Dentistry, an affiliate of University of Punjab , Master of Science degree in Prosthodontics from the University of Michigan, Ann Arbor in 1975. University of the Pacific, San Francisco, completing a Master of Science in Orthodontics in 1984.`,
            img: aa
        },
        sm:{
            name:"Sulaiman S. Mehdi",
            content:`Sulaiman holds a Master’s degree and is also a Fellow member of the Institute of Corporate Secretaries of Pakistan (FCISP).

            He has over 13 years experience of working with leading Financial Services Groups in senior positions in the area of operations, investments, marketing, legal and corporate affairs. He joined Central Insurance (CICL) as the COO & CS on October 01, 2010 and led the insurance license revocation process. The revocation of license and its business restructuring from CICL to Cyan is a landmark transaction, and the first of its kind in Pakistan. He has been made the CEO of Cyan wef 26 August, 2014.He is also Chairman of Pebbles Limited.
            
            Before Cyan, he served as the COO and CS for ABL AMCL from January 01, 2008 to September 30, 2010 and during his tenure the assets under management grew from a start-up fund of USD 18 million to USD130 million with four funds. Before ABL AMCL he was also associated with ABL Bank - CIBG as SVP from June 2007 till December 31, 2008, and was primarily responsible for the formation of ABL Asset Management Company Limited. Before joining ABL, he served as the COO and CS of PICIC Asset Management Company Ltd. - one of the leading Asset Management Company of Pakistan from July 2004 to June 2007 and was primarily responsible for the formation of PICIC AMC. During his tenure the assets under management in the form of closed end funds grew from USD 45 million to USD190 million. Sulaiman started his career with Pakistan Industrial Credit and Investment Corporation Limited (PICIC-DFI) in July 2001 as a Management Trainee (OG-II) and was there till June 30, 2004 in the capacity of Manager Corporate Affairs.
            
            Amongst Sulaiman’s nascent achievements is the USD 60 million acquisition of Hub Power Company Limited (HUBC) by Dawood Hercules Group that was championed from Cyan’s platform on June 13, 2012. As Fund Manager for Cyan’s listed equities portfolio, Cyan’s portfolio increased by 56% versus 49% of the KSE-100 Index in 2012.`,
            img: sm
        },
        hl:{
            name:"HUNAID H. LAKHANI, Founding Chancellor IQRA UNIVERSITY",
            content:"After graduating in Business Administration from The American College, Los Angeles, in 1997, Mr. Lakhani graduated from the Owner-President Management Program at Harvard Business School, USA, in 2006.In 1998, Mr. Lakhani initiated Iqra University to offer international quality education to the people of Pakistan. Iqra University is chartered by the Government of Sindh, recognized by the Higher Education Commission, and is ranked as the No.1 private university in Sindh by CIEC. Iqra University has seven campuses in the major cities of Pakistan with about 10,000 students.Mr. Lakhani brings with him over ten years of experience in the housing industry. During this period, several projects were completed by him including Hunaid City, Karachi, Cecil Apartments, Murree and Gulshan View, Karachi.",
            img: hl
        }
    }

}
}

export default About;