import React from 'react';
import huzaifa from "../img/huzaifa.jpg";
import faraz from "../img/faraz.jpg";
import haroon from "../img/haroon.jpg";
import tabarak from "../img/tabarak.jpg";


function Testimonials(props) {

    const testimonials = [
        {
            name : "Huzaifa Bin Shahbaz" ,
            img : huzaifa
        } ,
        {
            name : "Malik Faraz" ,
            img : faraz
        } ,
        {
            name : "Tabarak Sheikh" ,
            img : tabarak
        } ,

        {
            name : "Haroon-ul-hassan" ,
            img : haroon
        } ,

    ];

    return (
        <div id='testimonial'>
               <div className=" container flex flex-col  mx-auto p-4 space-y-10 md:space-y-0 
               mt-10 items-center w-full max-w-full">

                      <h2 className='text-center text-brightRed text-4xl font-bold'>Testimonials </h2> 

                      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-y-10 md:gap-x-10 lg:gap-y-0
                      p-2  w-full max-w-full  place-items-center">
                                 
                 { testimonials.map((item)=>  

                 <div key={item.name} className="flex flex-col items-center max-w-md p-4 mt-10 space-y-5
                    border-l-0  border-b-darkGrayishBlue border-t-0 border-r-0 rounded border dropdown-shadow-lg shadow-md ">
                                     
                                        
                                        <img className='w-40 h-40  md:w-28 md:h-28 rounded-full ' src={item.img} alt="" />    
                                        
                                     
                                    <h3 className='text-center text-brightRed'>{item.name}</h3> 
                                    <p className='text-center text-darkGrayishBlue py-3'> It was a great experience working with tech legion</p>
                                 </div>  )}

                      </div>
               </div>
        </div>
    );
}

export default Testimonials;