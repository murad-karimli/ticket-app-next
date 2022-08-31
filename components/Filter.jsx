import React from 'react'

function Filter() {
  return (
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
  )
}

export default Filter