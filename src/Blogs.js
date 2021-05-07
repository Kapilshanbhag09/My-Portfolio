import React from 'react'
import { Link, withRouter } from "react-router-dom";

import './Blogs.css'
function Blogs() {
    return (
        <div className="blogs">
           <div className="header">
                <p className="header_1">BLOGS</p>
                <p className="header_2">by</p>
                <p className="header_3">KAPIL SHANBHAG</p>
           </div>
           <div>
           <Link style={{textDecoration: 'none'}} to='/blogs/blog1'>
               <div className="blog_box">
                   
                
                
                <p className="blog_title">Why do I like Software Development?</p>
               <p className="blog_date">07 May 2021</p>
               </div>
               </Link>



               
           </div>
        </div>
    )
}

export default Blogs
