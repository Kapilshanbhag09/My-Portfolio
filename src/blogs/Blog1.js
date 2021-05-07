import React from 'react'
import './Blog1.css'
import Github_Logo from '../assets/githublogo.png'
import Twitter_Logo from '../assets/twitterlogo.png'
import Instagram_Logo from '../assets/instagramlogo.png'
import Linkedin_Logo from '../assets/linkedinlogo.png'

function Blog1() {
    return (
        <div>
            <div className="header">
                <p className="header_1">BLOGS</p>
                <p className="header_2">by</p>
                <p className="header_3">KAPIL SHANBHAG</p>
           </div>
           <div className="blog_area">
               <p className="blog_area_title">Why do I like Software Development?</p>
                <p className="blog_area_letters">According to google Software means the programs and other operating information used by a computer. But according to me software means a tool to revolutionalize the world.
                Being a kid I used to have an access to the internet bit earlier than many. I used to wonder how to make an application or a wesite. And thats when I decided that I must develop great apps and websites. Then I took Computer Science as my stream and started my journey to be a software developer.
</p>
        <img src='https://firebasestorage.googleapis.com/v0/b/kapilshanbhag-86f43.appspot.com/o/Blog_1%2F1.jpg?alt=media&token=4923fd9f-b5e6-480f-bf0b-bdfdf08160b0' width='92%' style={{marginLeft:'4%',marginRight:'4%',marginTop:'10px',marginBottom:'10px'}}/>
        <p className="blog_area_subtitle">Here are six reasons I love software development</p>
           
           <p className="blog_area_points">1. Greater Impact.</p>
           <p className="blog_area_letters">A software which is built can be used by many and any in this world. You can give a great contribution by writing the code. Doesn't it sounds interesting? Yes! its more interesting than it sounds.
</p>
<p className="blog_area_points">2. Comfortable Work.</p>
<p className="blog_area_letters">You need not go to mine, you need not be under the sun, neither you have to lift heavy things. The software development job is comfortable that you can sit in the air conditioned room and do your work
</p>
<p className="blog_area_points">3. Remote Working</p>
<p className="blog_area_letters">In this times I feel that only job or work that is not affected is Computer Science field. Even if you work from home without going to the office you can do your task without bothering about the office attandance.
</p>
<p className="blog_area_points">4. Constant Learning.</p>
<p className="blog_area_letters">One bad but good thing is constant learning. The technology you use today may not be used after 5 or 10 years. New Technologies arrives rapidly which makes you to be an active learner throughout your life.
</p>
<p className="blog_area_points">5. Great Community</p>
<p className="blog_area_letters">Can you find any other field where ample of people are sharing their skills or knowledge? There are lot of resources that can help you to be the master of this field</p>
    
<p className="blog_area_points">6. Good Pay.</p>
<p className="blog_area_letters">   Lastly may be the salary which software developer is better than other works. Literally which other profession gives you lakhs in months by sitting on chair in front of the computer and coding?
</p>
       </div>
       <div className="footer">
           <div>
        <img src={Github_Logo} className="footer_logo" onClick={()=>window.open("https://github.com/Kapilshanbhag09")}/>
        <img src={Twitter_Logo} className="footer_logo" onClick={()=>window.open("https://twitter.com/ShanbhagKapil")}/>
        <img src={Instagram_Logo} className="footer_logo"  onClick={()=>window.open("https://www.instagram.com/shanbhagkapil/")}/>
        <img src={Linkedin_Logo} className="footer_logo" onClick={()=>window.open("https://www.linkedin.com/in/kapil-shanbhag/")}/>
        </div>
       </div>
        </div>
    )
}

export default Blog1
