import React, { useRef, useState } from 'react';
import logo from "../img/logo.png";

function Navbar(props) {

    const[menuIsOpen , setMenuIsOpen] = useState(false);

    const buttonRef = useRef();
    const menuRef = useRef();

    const handleMenu=()=>
    {
         const btn = buttonRef.current;
         const menu = menuRef.current;


         if(menuIsOpen===true)
         {
           const closeButton = btn.className.split("open")[0];
           btn.className = closeButton;

           menu.className = menu.className+" "+"hidden";

            setMenuIsOpen((prev)=>{
                return (!prev);
             })
         }

         else
         {
            btn.className = btn.className+" "+"open";

            const openTheMenu = menu.className.split("hidden")[0];
            menu.className = openTheMenu;
            setMenuIsOpen((prev)=>{
                return (!prev);
             })
         }
    
    };

    return (
        <nav className="relative container mx-auto p-6">

        <div className="flex items-center justify-between">
   
         <div className="pt-2 ">
             <img src={logo} alt="" width={90} height={90} />
         </div>
   
         <div className="hidden md:flex space-x-6">
           <a href="#team" className="hover:text-darkGrayishBlue"> Team </a>
           <a href="#features" className="hover:text-darkGrayishBlue"> Why Us </a>
           <a href="#footer" className="hover:text-darkGrayishBlue">About Us </a>
           <a href="#testimonial" className="hover:text-darkGrayishBlue"> Testimonials </a>
         </div>
              
              <button className=" hidden md:block bg-brightRed p-3 px-5 pt-2 text-white
               rounded-full  hover:bg-red-400">Get Started </button>

               {/* HAMBURGER MENU FOR MOBILE */}

               <button id="menu-btn" className="btn-block  hamburger md:hidden focus:outline-none" ref={buttonRef} onClick={handleMenu}>
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
               </button>
        </div>
        
        <div className="md:hidden">
            <div id="menu" ref={menuRef} className="flex flex-col items-center self-end  py-8 mt-10 space-y-6 font-bold 
            bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-lg hidden">

           <a href="#team" className="hover:text-darkGrayishBlue"> Team </a>
           <a href="#features" className="hover:text-darkGrayishBlue"> Why Us </a>
           <a href="#footer" className="hover:text-darkGrayishBlue">About Us </a>
           <a href="#testimonial" className="hover:text-darkGrayishBlue"> Testimonials </a>
            </div>

        </div>
   
        </nav>
    );
}

export default Navbar;