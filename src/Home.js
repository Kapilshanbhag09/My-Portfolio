import React from 'react'
import './Home.css'
import { Link, withRouter } from "react-router-dom";
import Kapil_Image from './assets/kapil.JPEG'
import Phone_Logo from './assets/phonelogo.jpg'
import Email_Logo from './assets/emaillogo.png'
import Github_Logo from './assets/githublogo.png'
import Twitter_Logo from './assets/twitterlogo.png'
import Instagram_Logo from './assets/instagramlogo.png'
import Linkedin_Logo from './assets/linkedinlogo.png'
import Github_Red_Logo from './assets/githubred.png'
function Home() {
    return (
        <div className="Home">
        <div className="sidebar">
        <div className="sidebar_img_div">
        <img src={Kapil_Image} className="sidebar_image"/>
        </div>
        <div>
          <p className="sidebar_name">KAPIL SHANBHAG</p>
          </div>
          <div className="sidebar_contact">
            <div className="sidebar_contact_box">
              <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
              <img src={Phone_Logo} width="30px" />
              <p style={{fontSize:'15px',color:'white',marginLeft:'7px'}}>91-9986248988</p>
              </div>
            </div>
            <div className="sidebar_contact_box">
              <div style={{display:'flex',flexDirection:'row',alignItems:'center'}} onClick={()=>window.open("https://github.com/Kapilshanbhag09")}>
              <img src={Github_Logo} width="30px" />
              <p style={{fontSize:'15px',color:'white',marginLeft:'7px'}}>Kapilshanbhag09</p>
              </div>
            </div>
            <div className="sidebar_contact_box">
              <div style={{display:'flex',flexDirection:'row',alignItems:'center'}} onClick={()=>window.open("https://www.linkedin.com/in/kapil-shanbhag/")}>
              <img src={Linkedin_Logo} width="30px" />
              <p style={{fontSize:'15px',color:'white',marginLeft:'7px'}}>kapil-shanbhag</p>
              </div>
            </div>
            <div className="sidebar_contact_box">
              <div style={{display:'flex',flexDirection:'row',alignItems:'center'}} onClick={()=>window.open("https://twitter.com/ShanbhagKapil")}>
              <img src={Twitter_Logo} width="30px" />
              <p style={{fontSize:'15px',color:'white',marginLeft:'7px'}}>ShanbhagKapil</p>
              </div>
            </div>
            <div className="sidebar_contact_box">
              <div style={{display:'flex',flexDirection:'row',alignItems:'center'}} onClick={()=>window.open("https://www.instagram.com/shanbhagkapil/")}>
              <img src={Instagram_Logo} width="30px" />
              <p style={{fontSize:'15px',color:'white',marginLeft:'7px'}}>shanbhagkapil</p>
              </div>
            </div>

            <div className="sidebar_contact_box">
              <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
              <img src={Email_Logo} width="30px" />
              <p style={{fontSize:'1.2vw',color:'white',marginLeft:'7px'}}>shanbhag.kapil09@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="sidebar_blogs">
          <Link style={{width:"100%",textDecoration: 'none'}} to='/blogs'>
              <p style={{textAlign:"center",width:"100%",color:"#eb4c4c",fontSize:"40px"}}>BLOGS</p>
         </Link>
          </div>
      </div>



      {/*Middle Bar */}
      <div className="middlebar">
      <div className="middlebar_1">
        <div style={{width:"100%"}}>
          <h1 className="middlebar_1_t1">HEY ALL!</h1>
          <h2 className="middlebar_1_t2">I am a software developer.</h2>
        </div>
      </div>
      <div className="middlebar_blogs">
          <Link style={{width:"100%",textDecoration: 'none'}} to='/blogs'>
              <p style={{textAlign:"center",width:"100%",color:"#eb4c4c",fontSize:"40px"}}>BLOGS -></p>
         </Link>
          </div>


      <div className="middlebar_2">
        <div className="middlebar_2_1">
          <p className={"middlebar_2_1_t1"}>EDUCATION</p>
        </div>
        <div className="middlebar_2_2">
          <div className="middlebar_2_2_1">
            <p className="middlebar_2_2_name">KLS Gogte Institute of Technolgy</p>
            <p className="middlebar_2_2_place">Belagavi</p>
            <p className="middlebar_2_2_degree">Bachelor of Engineering (C.S)</p>
            <p className="middlebar_2_2_date">2018-2022</p>
            <p className="middlebar_2_2_marks">CGPA:8.98</p>
          </div>
          <div className="middlebar_2_2_2">
            <p className="middlebar_2_2_name">Sharadha PU College</p>
            <p className="middlebar_2_2_place">Manglore</p>
            <p className="middlebar_2_2_degree">Pre University College (PCMB)</p>
            <p className="middlebar_2_2_date">2016-2018</p>
            <p className="middlebar_2_2_marks">Perc:92.5%</p>
          </div>
        </div>
      </div>
      {/*Projects Section */}
      <div className="middlebar_3">
        <div className="middlebar_2_1">
          <p className="middlebar_3_1_t1">PROJECTS</p>
        </div>
        <div className="middlebar_3_2">
            <div className="middlebar_3_2_p">
              <p className="middlebar_3_2_p_title">Dictionary</p>
              <p className="middlebar_3_2_p_description">A dictionary app built with react library using express backend framework and mongoDB to store search history.</p>
              <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginBottom:'10px',marginTop:'10px'}}>
              <img src={Github_Red_Logo} className="middlebar_3_2_p_logo" onClick={()=>window.open("https://github.com/Kapilshanbhag09/React_Dictionary")}/>
              </div>
            </div>
            <div className="middlebar_3_2_p">
            <p className="middlebar_3_2_p_title">Calendar</p>
              <p className="middlebar_3_2_p_description">A static 2021 calendar mobile app built with flutter which shows Indian holidyas and events.</p>
              <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginBottom:'10px',marginTop:'10px'}}>
              <img src={Github_Red_Logo} className="middlebar_3_2_p_logo" onClick={()=>window.open("https://github.com/Kapilshanbhag09/2021_Calender_flutter")} />
              </div>
            </div>

        </div>
        <div className="middlebar_3_3">
            <div className="middlebar_3_2_p">
            <p className="middlebar_3_2_p_title">Billing Application</p>
              <p className="middlebar_3_2_p_description">A Destop application built with electron for billing purpose which can scan from barcode and give pdf of bill.</p>
              <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginBottom:'10px',marginTop:'10px'}}>
              <img src={Github_Red_Logo} className="middlebar_3_2_p_logo"/>
              </div>
            </div>
            <div className="middlebar_3_2_p">
            <p className="middlebar_3_2_p_title">Hotel Website</p>
              <p className="middlebar_3_2_p_description">A sample website built for Promotion of the hotel built with simple HTML,CSS and Javascript.</p>
              <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginBottom:'10px',marginTop:'10px'}}>
              <img src={Github_Red_Logo} className="middlebar_3_2_p_logo" onClick={()=>window.open("https://github.com/Kapilshanbhag09/Suruchi")}/>
              </div>
            </div>

        </div>
      </div>
      {/*Skills Section */}
      <div className="middlebar_4">
        <div className="middlebar_2_1">
          <p className="middlebar_2_1_t1">SKILLS</p>
        </div>
        <div className="middlebar_4_2">
         <p className="middlebar_4_2_title">Programing Languages</p>
         <div className="middlebar_4_2_1">
          <p  className="middlebar_4_2_1_pname">C/C++</p>
          <div className="middlebar_4_2_1_status">
            <div style={{backgroundColor:"#eb4c4c",width:'75%',height:'100%'}}>
              
            </div>
          </div>
         </div>
         <div className="middlebar_4_2_1">
          <p className="middlebar_4_2_1_pname">Python</p>
          <div className="middlebar_4_2_1_status">
            <div style={{backgroundColor:"#eb4c4c",width:'50%',height:'100%'}}>
              
            </div>
          </div>
         </div>
         <div className="middlebar_4_2_1">
          <p className="middlebar_4_2_1_pname">Java</p>
          <div className="middlebar_4_2_1_status">
            <div style={{backgroundColor:"#eb4c4c",width:'25%',height:'100%'}}>
              
            </div>
          </div>
         </div>
         <div className="middlebar_4_2_1">
          <p className="middlebar_4_2_1_pname">JavaScript</p>
          <div className="middlebar_4_2_1_status">
            <div style={{backgroundColor:"#eb4c4c",width:'60%',height:'100%'}}>
              
            </div>
          </div>
         </div>
        </div>
        <div className="middlebar_4_3">
         <p className="middlebar_4_2_title">Technical</p>
        <div className="middlebar_4_3_1">
          <div className="middlebar_4_3_1_1">
          <div className="middlebar_4_3_1_box">
            <p className="middlebar_4_3_1_box_title">Web Frameworks</p>
            <li className="middlebar_4_3_1_box_list">React</li>
            <li className="middlebar_4_3_1_box_list">Flask</li>
            <li className="middlebar_4_3_1_box_list">NodeJs/Express</li>
            <li className="middlebar_4_3_1_box_list">Django</li>
          </div>
          <div className="middlebar_4_3_1_box">
          <p className="middlebar_4_3_1_box_title">Mobile Frameworks</p>
          <li className="middlebar_4_3_1_box_list">React Native</li>
          <li className="middlebar_4_3_1_box_list">Flutter</li>
          </div>  
          </div>
          
          <div className="middlebar_4_3_1_1">
          <div className="middlebar_4_3_1_box">
          <p className="middlebar_4_3_1_box_title">Database</p>
          <li className="middlebar_4_3_1_box_list">My Sql</li>
            <li className="middlebar_4_3_1_box_list">Mongo DB</li>
            <li className="middlebar_4_3_1_box_list">Firestore</li>
          </div>
          <div className="middlebar_4_3_1_box">
          <p className="middlebar_4_3_1_box_title">Devops</p>
          <li className="middlebar_4_3_1_box_list">Firebase</li>
          <li className="middlebar_4_3_1_box_list">Heroku</li>
          <li className="middlebar_4_3_1_box_list">GitHub</li>
          </div>
        </div>
        </div>




        </div>
        <div className="middlebar_4_4">
         <p className="middlebar_4_2_title">Languages</p>
         <div className="middlebar_4_4_1">
          <div className="middlebar_4_4_1_1">
          <div className="middlebar_4_4_1_box">
            <p className="middlebar_4_4_1_box_language">English</p>
          </div>
          <div className="middlebar_4_4_1_box">
            <p className="middlebar_4_4_1_box_language">Hindi</p>
          </div>  
          </div>
          
          <div className="middlebar_4_4_1_1">
          <div className="middlebar_4_4_1_box">
          <p className="middlebar_4_4_1_box_language">Kannada</p>
          </div>
          <div className="middlebar_4_4_1_box">
          <p className="middlebar_4_4_1_box_language">Konkani(M.T)</p>
          </div>
        </div>
        </div>
        </div>
      </div>
      {/*About Me Section */}
      <div className="middlebar_5">
        <div className="middlebar_2_1">
          <p className={"middlebar_2_1_t1"}>ABOUT ME</p>
        </div>
        <div>
         <div className="middlebar_5_1">
           <p className="middlebar_5_1_text" style={{fontSize:"25px",textAlign:'justify'}} >
Hi there, I am Kapil Shanbhag a computer science student and enthusiastic Software developer. I am currently in 6th Semester of Engineering and learning new things everyday and surely won't stop that. I am a Book lover and I make sure to read atleast 1 book a month. Reviews of my book will be in my blogs as soon as I complete reading books. I also love Wathcihing movies in the weekend. If one would ask me about deadliest combination in the world then I would say amalgam of books and movies. I writes sometimes. No! I am not a poet, but whenever I feel to write, I take laptop and start typing my thoughts which will be displayed in blogs.
All my technical related information is displayed above and I am sure that I need not write anything here. Feel free to  Contact me for any thing in any of the communication medium given in the sidebar or below.
 </p>
         </div>
        </div>
      </div>
      {/*Contact Section */}
      <div className="middlebar_6">
        <div className="middlebar_2_1">
          <p className={"middlebar_2_1_t1"}>CONTACT</p>
        </div>
        <div className="middlebar_6_1">
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'10px'}}>
        <img src={Phone_Logo} width="50px" />
        </div>
        <p style={{fontSize:'5vw',color:'white',textAlign:'center'}}>91-9986248988</p>
        </div>
        <div className="middlebar_6_1">
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'10px'}}>
        <img src={Github_Logo} width="50px" onClick={()=>window.open("https://github.com/Kapilshanbhag09")}/>
        </div>
        <p style={{fontSize:'5vw',color:'white',textAlign:'center'}}>Kapilshanbhag09</p>
              

        </div>
        <div className="middlebar_6_1">
          <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'10px'}}>
          <img src={Linkedin_Logo} width="50px" onClick={()=>window.open("https://www.linkedin.com/in/kapil-shanbhag/")}/>
          </div>
        <p style={{fontSize:'5vw',color:'white',textAlign:'center'}}>kapil-shanbhag</p>
        </div>
        <div className="middlebar_6_1">
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'10px'}}>
        <img src={Twitter_Logo} width="50px" onClick={()=>window.open("https://twitter.com/ShanbhagKapil")} />
        </div>
              <p style={{fontSize:'5vw',color:'white',textAlign:'center'}}>ShanbhagKapil</p>
              

        </div>
        <div className="middlebar_6_1">
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'10px'}}>
        <img src={Instagram_Logo} width="50px" onClick={()=>window.open("https://www.instagram.com/shanbhagkapil/")} />
        </div>
              <p style={{fontSize:'5vw',color:'white',textAlign:'center'}}>shanbhagkapil</p>
              

        </div>
        <div className="middlebar_6_1">
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'10px'}}>
        <img src={Email_Logo} width="50px" />
        </div>
        <p style={{fontSize:'5vw',color:'white',textAlign:'center',paddingBottom:'50px'}}>shanbhag.kapil09@gmail.com</p>
              

        </div>
      </div>
      </div>
            
        </div>
    )
}

export default Home
