import './App.css';
import Kapil_Image from './assets/kapil.JPEG'
import Phone_Logo from './assets/phonelogo.jpg'
import Email_Logo from './assets/emaillogo.png'
import Github_Logo from './assets/githublogo.png'
import Twitter_Logo from './assets/twitterlogo.png'
import Instagram_Logo from './assets/instagramlogo.png'
import Linkedin_Logo from './assets/linkedinlogo.png'
import Project_1 from './assets/P11.png'
import Github_Red_Logo from './assets/githubred.png'
function App() {
  return (
    <div className="App">
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
      </div>



      {/*Middle Bar */}
      <div className="middlebar">
      <div className="middlebar_1">
        <div style={{width:"100%"}}>
          <h1 className="middlebar_1_t1">HEY ALL!</h1>
          <h2 className="middlebar_1_t2">I am a software developer.</h2>
        </div>
      </div>
      <div className="middlebar_2">
        <div className="middlebar_2_1">
          <p className={"middlebar_2_1_t1"}>EDUCATION</p>
        </div>
        <div className="middlebar_2_2">
          <div className="middlebar_2_2_1">
            <p className="middlebar_2_2_name">KLS Gogte Institute of Technolgy</p>
            <p className="middlebar_2_2_place">Belagavi</p>
            <p className="middlebar_2_2_degree">Bachelor of Engineering</p>
            <p className="middlebar_2_2_date">2018-2022</p>
            <p className="middlebar_2_2_marks">CGPA:8.98</p>
          </div>
          <div className="middlebar_2_2_2">
            <p className="middlebar_2_2_name">Sharadha PU College</p>
            <p className="middlebar_2_2_place">Manglore</p>
            <p className="middlebar_2_2_degree">PCMB</p>
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
              <p className="middlebar_3_2_p_description">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
              <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginBottom:'10px',marginTop:'10px'}}>
              <img src={Github_Red_Logo} className="middlebar_3_2_p_logo" onClick={()=>window.open("https://github.com/Kapilshanbhag09/React_Dictionary")}/>
              </div>
            </div>
            <div className="middlebar_3_2_p">
            <p className="middlebar_3_2_p_title">Calendar</p>
              <p className="middlebar_3_2_p_description">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
              <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginBottom:'10px',marginTop:'10px'}}>
              <img src={Github_Red_Logo} className="middlebar_3_2_p_logo" onClick={()=>window.open("https://github.com/Kapilshanbhag09/2021_Calender_flutter")} />
              </div>
            </div>

        </div>
        <div className="middlebar_3_3">
            <div className="middlebar_3_2_p">
            <p className="middlebar_3_2_p_title">Billing Application</p>
              <p className="middlebar_3_2_p_description">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
              <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginBottom:'10px',marginTop:'10px'}}>
              <img src={Github_Red_Logo} className="middlebar_3_2_p_logo"/>
              </div>
            </div>
            <div className="middlebar_3_2_p">
            <p className="middlebar_3_2_p_title">Hotel Website</p>
              <p className="middlebar_3_2_p_description">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
              <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginBottom:'10px',marginTop:'10px'}}>
              <img src={Github_Red_Logo} className="middlebar_3_2_p_logo" onClick={()=>window.open("https://github.com/Kapilshanbhag09/Suruchi")}/>
              </div>
            </div>

        </div>
      </div>
      <div className="middlebar_4">
        <div className="middlebar_2_1">
          <p className={"middlebar_2_1_t1"}>SKILLS</p>
        </div>
        <div>
          <h2>Hello</h2>
        </div>
      </div>
      <div className="middlebar_5">
        <div className="middlebar_2_1">
          <p className={"middlebar_2_1_t1"}>ABOUT ME</p>
        </div>
        <div>
          <h2>Hello</h2>
        </div>
      </div>
      <div className="middlebar_6">
        <div className="middlebar_2_1">
          <p className={"middlebar_2_1_t1"}>CONTACT</p>
        </div>
        <div>
          <h2>Hello</h2>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default App;
