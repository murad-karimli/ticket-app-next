import React from 'react'

function Event({data}) {
  return (
    <div key={index} className="flex rounded-2xl my-8">
        <img src={data.image}
        className="inline-block rounded"/>
        <div className='p-4 bg-[#fda3] flex flex-col justify-center items-center rounded'>
          <h1>{data.name}</h1>
          <span className='block my-4'><FontAwesomeIcon icon={faCalendar}/> {data.time} </span>
          <span className='block my-4'><FontAwesomeIcon icon={faLocationDot} /> {data.location}</span>
          <button onClick={()=>pagesHandler(data.id)}className='p-4 bg-[#da23] rounded-2xl block float-right'>Explore <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
      </div>
  )
}

export default Event