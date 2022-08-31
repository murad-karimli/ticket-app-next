import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCalendar , faLocationDot,faArrowRight} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'
import allData from "../allData"
import Nav from '../components/Nav';
import Filter from '../components/Filter';

function Main()
{
  //add navigation link in here and navigate the page

  // function pagesHandler(id)
  // // {
  // //   <Link href={`/events/${id}`}></Link>
  // // }
  return(
    <>
    <Nav/>
   <div className='flex flex-col justify-center items-center'>
    <Filter/>
    
    {allData.map((el,index)=>{
      return (
        <Event data={el}/>
      )

    })}
   
   </div>
    </>
  )
}
export default Main