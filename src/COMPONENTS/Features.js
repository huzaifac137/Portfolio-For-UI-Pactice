import React from 'react';

function Features(props) {

    const list = [
        {
            number : 1 , 
            heading : "High Quality Solutions" ,
            details : "Professional and experienced people in our team ensures quality"
        }  ,
        {
            number : 2,
            heading : "Time Efficient" ,
            details : "No need to worry about the deadlines anymore!"
        }  ,
        {
            number : 3 ,
            heading : "Clean UI" ,
            details : "Good User Interface is must."
        } 
    ];

    return (
       <section id="features">

        <div className="container flex flex-col space-y-12 mx-auto mt-10 px-4 md:flex-row md:space-y-0 md:space-x-12">

             {/* WHY */}

            <div className="flex flex-col space-y-12 md:w-1/2 ">

             <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                How is Tech Legion different?
             </h2>

             <p className="text-center md:text-left text-darkGrayishBlue max-w-md">
                High quality software solutions produced by highly qualified web developers from around the world.
             </p>

            </div>


             {/* LIST */}
            <div className="flex flex-col space-y-8 md:w-1/2">
             
            {  list.map((item)=>  <div key={item.number} className="flex-flex-col space-y-3 md:space-y-0 md:space-x-6">

<div className="flex flex-row space-x-1 justify-center md:justify-start  space-x-2 ">
<h2 className=' bg-brightRed w-10 rounded-full text-center'>{item.number}</h2> <h3 className=' font-bold '>{item.heading} </h3>
 </div> 
 
   <h5 className='text-center md:text-left text-darkGrayishBlue p-3 '> {item.details} </h5>
</div>

    )}
            </div>

        </div>
       </section>
    );
}

export default Features;