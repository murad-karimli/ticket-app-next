import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCalendar , faLocationDot,faArrowRight} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'
import allData from "../allData"

function Main()
{
  function pagesHandler(id)
  {
    <Link href={`/events/${id}`}></Link>
  }
  return(
    <>
    <nav className="p-2 flex justify-between text-[#fff] px-12 bg-[#434447]">
      <div><h1 className="text-4xl  font-bold">MyTicket</h1></div>
      <a className="inline-block text-2xl font-semibold">Browse All Tickets</a>
    </nav>

  

   <div className='flex flex-col justify-center items-center'>
   <form className='my-12 w-[30%]'>
     <div className='p-4 bg-[#fde]  flex justify-between'>
     <select>
        <option>2022</option>
        <option>2021</option>
        <option>2020</option>
        <option>2019</option>
      </select>

      <select>
        <option>January</option>
        <option>February</option>
        <option>March</option>
        <option>April</option>
      </select>

      <button className='bg-[#ffdf] p-2 rounded-xl '>Search</button>
     </div>

    </form>
    
    {allData.map((el,index)=>{
      return (
        <div key={index} className="flex rounded-2xl my-8">
        <img src={el.image}
        className="inline-block rounded"/>
        <div className='p-4 bg-[#fda3] flex flex-col justify-center items-center rounded'>
          <h1>{el.name}</h1>
          <span className='block my-4'><FontAwesomeIcon icon={faCalendar}/> {el.time} </span>
          <span className='block my-4'><FontAwesomeIcon icon={faLocationDot} /> {el.location}</span>
          <button onClick={()=>pagesHandler(el.id)}className='p-4 bg-[#da23] rounded-2xl block float-right'>Explore <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
      </div>
      )

    })}
   
   </div>
    </>
  )
}
export default Main