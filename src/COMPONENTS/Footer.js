import React from 'react';
import {AiFillFacebook , AiFillInstagram , AiFillLinkedin} from "react-icons/ai";

function Footer(props) {
    return (
       <section id="footer">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-y-10  gap-x-10 mt-20 bg-brightRed p-2">
           <div className="flex flex-col items-center md:items-start md:max-w-md w-full gap-y-3 md:ml-6" > 
            <h2 className='text-white text-2xl'>Our Social Media Handles </h2> 
             <div className="flex  gap-x-3">
                <a href="https://www.facebook.com/itstechlegion" target="_blank" > <AiFillFacebook className='w-8 h-8 md:w-6 md:h-6 ' /> </a>
                <a href="https://www.instagram.com/tech__legion" target="_blank"><AiFillInstagram className='w-8 h-8 md:w-6 md:h-6'/> </a>
                <a href="https://www.linkedin.com/company/tech-legion" target="_blank"> <AiFillLinkedin className='w-8 h-8 md:w-6 md:h-6'/></a>
             </div>
           </div>
           <div className="md:max-w-md flex flex-col items-center md:items-start w-full"> 
              <h2 className='text-white text-1xl '>Copyright 2022 ,TechLegion. All rights reserved</h2>
              <h3 className=' text-lg'> A certified company </h3>
           </div>
           
        </div>
       </section>
    );
}

export default Footer;