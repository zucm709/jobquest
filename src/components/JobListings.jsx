import React,{ useState } from 'react'
import { FaMapMarker } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const JobListings = ({ job }) => {
    const [showFullDescription,setShowFullDescription]=useState(false);
    
    let description = job.description;
   
    if(!showFullDescription){
        description = description.substring(0,90) + '...';
    }

    const onHandleMore = () =>{
         setShowFullDescription((prevSate) => !prevSate)
    }

  return (
    <div>
     
             <div  class="bg-white r
             ounded-xl shadow-md relative">
             <div class="p-4">
               <div class="mb-6">
                 <div class="text-gray-600 my-2">{job.type}</div>
                 <h3 class="text-xl font-bold">{job.title}</h3>
               </div>
  
               <div class="mb-5">
               {description}
               <button 
               onClick={onHandleMore}>
                {showFullDescription ? 'less' : 'more'}
               </button>
               </div>
  
               <h3 class="text-indigo-500 mb-2">{job.salary} /Yearly</h3>
  
               <div class="border border-gray-100 mb-5"></div>
  
               <div class="flex flex-col lg:flex-row justify-between mb-4">
                 <div class="text-orange-700 mb-3">
                   <FaMapMarker className='inline text-sm mb-1 mr1'/>
                  {job.location}
                 </div>
                 <Link
                   to={`/jobs/${job.id}`}
                   class="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm">
                  Read More
                 </Link>
               </div>  
             </div>
           </div>
        
    </div>
  )
}

export default JobListings
