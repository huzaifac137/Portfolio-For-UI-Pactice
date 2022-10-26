import React from 'react';
import logo from "../img/logo.png";
import huzaifa from "../img/huzaifa.jpg";
import faraz from "../img/faraz.jpg";
import haroon from "../img/haroon.jpg";
import tabarak from "../img/tabarak.jpg";

function Team(props) {

    const members =[
        {
            name : "Huzaifa Bin Shahbaz" ,
            skill : "Full-Stack Web Developer" ,
            img : huzaifa
        } ,
        {
            name : "Malik Faraz" ,
            skill : "Mobile App Developer" ,
            img : faraz
        } ,
        {
            name : "Tabarak Sheikh" ,
            skill : "Mobile App Developer (Full-Stack) / Web Developer (Frontend)" ,
            img : tabarak
        } ,

        {
            name : "Haroon-ul-hassan" ,
            skill : " Frontend Web Developer" ,
            img : haroon
        } ,

        {
            name : "Vishal" ,
            skill : "Project Manager / Frontend Web Developer" ,
            img : logo
        } ,
    ]
    return (
        <section id='team'>
        <div className='flex flex-col container w-full md:max-w-full  mx-auto space-y-10 md:space-y-0 p-4  md:space-x-10 mt-14 '>
              
              <h2 className="text-center font-bold text-brightRed text-4xl"> Our Team </h2> 

             <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-rows-1 lg:grid-cols-5  md:gap-x-5 gap-y-5 p-2">

                 { members.map((item)=>
             
                <div key={item.img} className=' mt-10 p-3 mx-auto w-50 border-t-0
                border-r-0 border-b-brightRed border-l-0 border my-5 shadow-sm'>
                    
                    <img src={item.img} alt="" />
                    <h2 className='text-lg text-center text-brightRedLight'>{item.name}</h2> 
                    <h4 className='text-center text-sm'> {item.skill} </h4>

                </div> )}
                     
                 </div>

              </div>
        </section>
    );
}

export default Team;