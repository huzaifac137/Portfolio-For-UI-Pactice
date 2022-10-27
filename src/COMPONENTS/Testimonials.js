import React, { useEffect, useRef, useState } from 'react';
import huzaifa from "../img/huzaifa.jpg";
import faraz from "../img/faraz.jpg";
import haroon from "../img/haroon.jpg";
import tabarak from "../img/tabarak.jpg";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import {AiOutlineArrowRight ,AiOutlineArrowLeft } from "react-icons/ai";


function Testimonials(props) {

    const[disablePrev , setDisablePrev] = useState(false);
    const[disableNext , setDisableNext] = useState(false);


    const swiperRef = useRef();

    const handlePrev=()=>
    {
        swiperRef.current?.slidePrev();
         setDisablePrev(swiperRef.current?.isBeginning) ;
         setDisableNext(swiperRef.current?.isEnd);
    }

    const handleNext=()=>
    {
        swiperRef.current?.slideNext();
        setDisablePrev(swiperRef.current?.isBeginning) ;
        setDisableNext(swiperRef.current?.isEnd);
    }


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
               <div className=" container flex flex-col  mx-auto p-4 space-y-10
               mt-10 items-center w-full max-w-full">

                      <h2 className='text-center text-brightRed text-4xl font-bold'>Testimonials </h2>

                                 
                  
    <Swiper 
      onBeforeInit={(swiper)=>{
        swiperRef.current = swiper;
      }}
      
      spaceBetween={50}
      slidesPerView={1}
      className="w-3/4 md:w-2/4 lg:w-2/5  p-5  space-y-5 cursor-pointer
      border-l-darkGrayishBlue    border-b-darkGrayishBlue border-t-0 border-r-0 rounded border dropdown-shadow-lg shadow-md "
    >

    { testimonials.map((item)=>     <SwiperSlide key={item.name} >
    <img className='w-44 h-44 mx-auto  md:w-28 md:h-28 rounded-full  ' src={item.img} alt="" />    
     <h3 className='text-center text-brightRed'>{item.name}</h3> 
     <p className='text-center text-darkGrayishBlue py-3'> It was a great experience working with tech legion</p>
    </SwiperSlide> )}
    </Swiper>
    <div className='flex flex-row mx-auto space-x-10'>
    <button  onClick={handlePrev }> { disablePrev===false ? <AiOutlineArrowLeft/> : null }   </button>

    <button onClick={handleNext} > { disableNext===false ? <AiOutlineArrowRight/> : null} </button>
    </div>
             {/*   <div key={item.name} className="flex flex-col items-center max-w-md p-4 mt-10 space-y-5
                    border-l-0  border-b-darkGrayishBlue border-t-0 border-r-0 rounded border dropdown-shadow-lg shadow-md ">
                                     
                                        
                                        <img className='w-40 h-40  md:w-28 md:h-28 rounded-full ' src={item.img} alt="" />    
                                        
                                     
                                    <h3 className='text-center text-brightRed'>{item.name}</h3> 
                                    <p className='text-center text-darkGrayishBlue py-3'> It was a great experience working with tech legion</p>
                 </div>  )}   */}

                      </div>
               </div>
       
    );
}

export default Testimonials;