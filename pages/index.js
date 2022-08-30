import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCalendar , faLocationDot,faArrowRight} from '@fortawesome/free-solid-svg-icons'

function Main()
{
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
   <div className="flex rounded-2xl my-8">
      <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUSFRgSFBUYGBgYGBgYGBgaGBgYGBgYGBkaGRoZGBkcIS4lHB4rIRgaJjgnKy8xNTU1GiQ7QDszPy40NTQBDAwMEA8QGhISGjQrISE0NDQ0NDQ0NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDQxNDQ0MTQ0NDQxNP/AABEIARMAtwMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAAAQIDBAUGB//EADsQAAICAAUCBAQEAwcEAwAAAAECABEDBBIhMUFRBSJhcQYygZETobHBQtHwI1JicoLh8RQzssJDkqL/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EACIRAQEAAgICAQUBAAAAAAAAAAABAhESIUFRMRMiI2FxA//aAAwDAQACEQMRAD8A8+iImnMiIgIiICXEW73qh9/SW5e1+XQB/Fd72dqqAw76XNoiH/uKBuwK6D8rA8H052A7TVo1d76zaZLPrh66ZqYaBdEUSBZ7bdt5RuWbDxVdkRNQTW2/mLEGwNvLuT9hN2mQwmRcR2VmzAUadYJ1NuV5BsXXsOs0PgWWxMNxiqCy7K5q0JJs6idqoGt5X4rmXV7LWqNiM6aBXQG7O4PlBI23hWlz5BxtDOCiuFsDyqgNbD2tvr6y5nMQLmRqAYJQOjbUB6j0+0ZnEqndASbOkjSq2eEA6gir225uY2VdWIFHjYE1vfmRT0Bs894R03i7lcE4ao4V7c7LoVUXUDY53NWew6ziHNnedlnsPWPwcB3e0DYqHompGVUPWr3/AMs47GrUa3Fmj3HQwtUgyAYkSIqMipEkQFQJLAd5TARJiBEREBERAREQJEuA1uOf0lqVQK1P3mTgZR3sbbWTZ2FUJjYa2efvNp4ZgNqWwfNv8v8ADtZHbb67yjs/AcqPwlxE1M6AoUatBYEUSCOasX7znfGsu+Hj4iuG0tijWA1BkbzXYPoeduDNmviP4bYgtmVdCBVoCnNh7O5NEC622kfEGZY6NeF5XxU06zpJVECsWo8Em7qvLcK5XNHysACq6zpTbYb9eTtMnwvCTEdMMhVs7ayQHrV8x7nihL2fx0GkaCB5rJ51G91F1RoH8u0wcdzSYhINEigB5SKJ2A7n8oR02J4bbuVxFwiSQ51eYU2y0OhUXU5TxivxnAYNRrUoADUBvQ2m+zOXxQhZCzBkvW1FeFVq32NEb87bTlDC0iREiEVJqIESZEmBEREBERAREQERECVlUpEkGBWom+8GzYOnDxPlUMwJ2ogEgA0ef2mowHB5BrSRt9wT9T+kzcsx0gKaUNZ5Nle6jfg3XqZRu8hm1L4mMQzLobQP49rNCqsDT81dB6zP8QzI/DdmZHLVhqWOr/ES1fKegHHM1/hnh2DiKmGz276gtWorsTxuOPtMPOouWdrUn/41tiV08O1VqsVXp6wrTYmKzkluigMe/ZjfU7ccynBxNAoqCCQd74BBNV3qvvL6PaubADdG3BVTYF3d2AO8xtGwJBI6bdBzv3/nCOyxCTgYiIyBcNVUKUKv5kLOoN+Y0SboDc8zicwgViBwCRzfHrOzzGJ+Nl3xAXDsqEf3RpUkgkCqIXj25nFYkLVESIkRMSJMCIiICIiAiIgIiICIiBMmRKgIFzAwyeAb+2wsn+vSbXJh1XYHzCgdVb3yo69esxspjqV/DIA7N13/ALx7enrLuA7ahp3ojTfSqr6Sjp8HJ4baB59bJYdW07mtum/mv6Ga74h8Md1TFALalt2YnUGVQDqDccX67zL8LchCVYsA2oBQANYIAJB5F9Kj4hz+JiIobayFLUKvRZvtftxCuPXCZrroJfy+JpYBhdjSa2JUkbHtQXb3EyUyigMGoNQK7/Nq28vcesxtbK41AE7EdeDRND2PPeEdDlsf8fETBVnw0TDVaBIFqRVkb2drJ6zm/FT/AGjiqpmWuANJK9Padv8A9MuGDiAsTpBZVptQA/EADaRtV9PScFmSSx1cwqzIkxIhERAiJMiAiIgIiICIiAiJMBKhtIEkQK8PYzd5LAJGzKD9Da8H/iadMI7Gq6XwO37zc+FY+6oKtgR3K+vH1+ko6TwZwmGSE0mwgYgCxzZHPrf+ITJ+KMr+KMNrJG4VRQ87aRZPYKD9piYpxiMJQPIqaWYke19z8p9dp0uW0ujA15SzMCAt7NVjqOPtCvPQyYbviMw1oaC0oNuK1BeDRPXiWMDQ7nE0hTVBD5tR2sk7aedqlXjyriYrFCLLAjigCB5SRtYuZOBlNeCmIEbW3lAArg7nbcf8cwN3g5nEwFRCVOp+DVKKHlBY/Lsee84bxTFXExXdV0qzEqOw6cTts0/9m+G+l3CJXdNwhY7bbte5/ScHmiNbVuLNHuL2MFWYiJEJERAREQJiREBERAREQEmRJECvDlWmjXHSUqalQBJ4O3Pt/X6yjKwTwoG5ND62OvXeXMUnDe6IYb7bUen5VLRwxxY3APPG/FS9rGkB1NEkgg1ZAAokjcDb7wM/LeLatCMq7EkmqG/H0F/ebr4h8Yx8DSAEAcAdbKAAUKPymposrgMLbQAp0dPn1eZQL6UDx2mD4ril8Vyz2ASAQSwr09IVU7qz/iaAO62dIY78jfT6fnL+Wx8RGALOotSaJHUGx9P0l34bwQ5xGZQ+lbF0TqJoUDsTudj+xl3xHEwiF/CY0FYsGBDMw00BVgdfzhG2y9Y+KEQfMhV6FgivI7CuNWnYjv3nKeM4Aw3OHsSl6iL5JPcCttM6HOZlsN8A4SEPoAP4eoh0JBUH+8Qb++80vxHhlcd9RBJomq2NcekLWoiIkQiJEBERARJiBEREBERASYiBMu4TleO46XtLai5Wg6XKMjUWtuTySdpb12KHNntuNv5TK0KB5trF9+AaFcyyUsqV78dt+8Dofhwv8nzqrAhCCys4IogE0a346XLHjeHly9YSsC7FaKgDX8tg9r+nvN94Z4Ziq6Ygp1etRPyqum1IA7VzNR8VrijMJhFtTAB1YABvMTXG1+sK1vhmC2GzlvKApVl1UT5ipujxqH6S/l8t5woosdwo4qz07k9JfzWXTBwmw8Z2/EYF1HIBJAYAjqas9Jgpm2OIHazQCtXB6E305vaBvUxguI1FTiYaVflVK6VfykXX2nJZttRd6rU5au1kn952/hfg6KGxMx5VQMNwSrqdQs9eTYHoPScr4+mGNH4V6SDueu54grTRESISIiAkxIgIiICIiAiIgTEiTArw5kJgkgGr6de0xhMhcdioUsaW9I7Xuf69ZRkYVNWoGqIB7ke82GUyhLqyaSfLsdxRBsm6FczV4a3zyL7ngXQnWfD+QGLqQAHa6uieCBzt0HTkwsbrwPxK8FjVadSkVsoujftvt7czj89gjUW82oAeY7H5hTkA7UL/AKE6w5tcsxwqJ1Vq2AGpvmBIFAbV9phMqOdaqylgaB3byHbVpvggCusDmPFc67inZXINhq81HcAH+7yf9RlGQdghWyobc7bbEGx67V9Zj57DIZtS0S3G1bWDx1uRgF3IANGwN663VfaEdJ4jn8TEw8PDUFrNirFEABfcEGc9n8SteG96loKBRAa/Pf0/T1nQeJMcvl0U0SdSHS1qr1qF0bsGzOSzLliWJssST6k7k/nC1ZiIkRESYgRERAREQEREBERASRIkiBIMy8lgfiBqNFVLb8UP3mKBK0cjgnsRxY7SjJyKW+52Flr6D1nQeE5t8O1UjSfOdudx39B+U5hHr6gj7zf+CW6NsCUB3PBJ3AI/i4MLGZ4p4i+GGdti1C6uy+5LHnYLVDacy+cc7q77Gx5iKJ5rfad3ksyjIpOl9JNEilsKFbUp+YeYelicx454exIbCS8NF0goL8o3JY9yxb7Tnc5MtOv07ceUa3L4lqSdypHPr7e0nWradRN3Q7afX7mXstlSuXOIf4m2HWlsXfa7H2kZDKriNTWFq9hbUNzQ7zo4tziYdquFivbAoyIODqoUx23s83ND4xgjDxGQEGqFjiwNwO86Pxd00hkV9sJdBLMGUq1aiO97kTmc5ivif2jsWJ7+vMLWHIkyJEIiICIiBNxIiAiIgIiICSJEmBUJk5fALhiK8os/eYwmw8O21E8aaI7k8XKMRgLm18FzeKNWEi69VHSBqoja6r139BLGfwxZoEb1VUo2vb6mbT4fzAwEfFA3Zgg70KJHtufsJMrqLjN1vcpkKwTh5gsusglcMi1A6AtYW9rrmh2mwy+fwEQYCYLBAKUFgSa6nmz95oc34mQLu3N/SYeRznLHc8cA7Tz2cu69OOXHqNvn/CcHGLKhOGW3Krut96P7VOb8R8HxMuDqIYEgApZ3N1q22Ox23myxPESEdyfN5q+gr9ZhZ7MPds9hStLe5YVqJPodQE6Y2zpzzkvbNzmG+YQEWSEoIAAA4+Ydz1O80vivhxwVSzuy37G6InY5XxhMJUAQaX1NuQpUEhRwNze23FCaD41wVV0Ie2ZbKdUHr67mdXKuWkSYkRESYgREmRAREQEREBERASZEmBMy8tdED0vv6ATFUTMyuJpN9eg9xKM100FSXFkWduNuN+suZzF0oiAUPK3PJJ5+36yxn3DEFRR0g7e/W5meNYCouAKIcqL3sEDrV7dZzzvcnt0wxtls8MfGbf6/rK8id/rLbnf/AFftKvD99/VifoJnw15Rm38h9Sf1leewLwhiBgd3JGk2tPW5v17THzDeT6zd5JFxMi41blmFbUvmJv2NSW2SX9tYYzK2X0rzvgrYaYWrzKrOxBFXa2wHOx0bD/F6Tkc0+pie5/qvSdXlvEMfGQKdTaAqVexs6VF89pzPiOVbCcowojmd3CxhxESIREiAiIgTEiICIiAiIgJIkSYFQl5ZbWXUWUZuWsFbBAJAJPuNt+kt53ELYpJN9SfX+ukvYOCxagSwG/XagST9hLnhuSOIjNRLMSQR0ANE+vX7zFm63LrHXurbnYH6y74ePKfZh+l/rLDt5PsJVl38hHof/ITN+Gpe1vH+T6zJ8FzX4YOoWrWjem9g12s/nMPEbyAep/c/tL/gmHrJWi1EEgckEV+0sx3LKkyuOUsb34bGoY2EKLBkZQbo8hvbgTV/FqD8QsFK9KNcgDfbvz9Zs8m4yuI2IoLBycJAAWbWNLAAd61D3Ims+LM0rOuGosoCWY/MWboemwqaxvRnO3PRESuZIkxAREQIiTEBIkyICIiAkiRJECtRMvLrq27/AJTEUS9hcgCUbvL45ww+IFDaUc8bbrpF+gu9+0yPg86ldGugAwoi9Lag2kdTtMzIYYw9Kb24334PrLiZdcHEDqLN7KRQAPXy8C6P3k13tvfWnP8AimEMN3QcBzX6/vMdNk+n/sf5CXfFG1u5QgjU3HoTx6THZCFFke1gfXmYFrFbavf+v1m3+C8wuHmRqrzI1X3Hm2+gM0+JpHLD73+ktpmdJsagKINMVJv2molbnxTxEjOu+GVCLihwLDJqChC4Prv/AL1NPnMVsR2djZY3f6flNjgYKvk8XEYeZcTCRPem1f8A56egmsKmh7SpVqRKiJEIREQFSJVciBEREBERUCIk1FQIlVSQsv4OCXIAHMotqJeUEH+r77Tcp4A7KpAYkjtYvfb9Pz7S3j+FOjAaTqHSjcaGRksR7B34Gk3R9KI4H8pv2wHVDiKh1qhNcsSqnYH14+sw8hkXxAr6dxXSrrb+U7bKeHMR5hYYb33krUeK4ss6bNDrPTPiz4Pwgj4+GGVwLIB8jMxA3BG1k9KnOeF/DDHN4GCzhg9u2mxSoC1We9AfWS5TeiY5a34cuUokHpd/SX/Dv+4oABu1o8eYEWfa7+k7XO/BQGO4fEYKfOtKNR1E3ZPqD06x8O+ADzgb6HKM1DVRVWFn7yTKXLS3DKTl4WcPwB8XLKgZUUM70q1qetNsSTew2qquaPPZIYSgbjtZtvrPTsv4U9qqkqij7/7TS/Fnwvi4h/Ewxr2AKjkUOneajNjzV1lJWbzMfDeZQhThNbHba/8Aj6zCGQfcspAG2/fsY0jX6ZFTMbAIF1MZkqNG1ESaipRTEmokGSiYdGyxNbCtO/frxtKssuFqGvUV6gEKfXejMSpNRtluCuUO9OKrZDd//aTpyg6Yt/6dvymmAi5d/pNOjwcPIn+Nx/mCnb1pptMlmMhhkfMTXzHSu/tqucRcm/WXZp6vgePZSg2tV5oHc0PaUt8R5FjqLKT6qwPbtPLNXr+kqBHU39ZNLyr1vLfFGRGysqn/ACtX3qZ6fFOXY0uKv3A/8uZ4qx9R9LlaAkXY+4vb0jicq9d8d8Yw3wH0Op8ycMvR1vgzmch4omHnsDEBGk60b2ZGA/OpxIat9pdzVakI3B33nLLH7pXox/0/HY9czPiKYmIzJRrDXqDW7neuDNP8GZ5UGYd23fGoeyoOnP8AFOZ+Fsx+Gmafthit+pJUfmROaVr56km/eMMfupnn+OPbn8cy6bNiop7Ei77aeZg4vxbl1JQvuPRt/Y1RnkAb+uJSWJnXjHn5V66/xfliPmAvvf8AKabM+MZVwwJXzEE7M1nf233nnJYyC/eJqG66zHXKEbYjDn+Hv0O/t9prs1hZUfLiYhPXyLX31XNGHkapraabDMLgblNfSga+tzFpO59OBLOqQTJaaVkDvEt3EiouLjSY0yNaTqkkynTGmDSoNFympIlTSblS1KQpki4NKrlYlAMlSP6EbTS8Esc7/X9KkuuyEnhit+4JH6GQMQcf7flM3Mth/wDTDzr+IMSwo3YrRAvp1MmV+HTDH5/jN8GdMPCxcR3ADMiaeWIW3JA9DoM0K1xvLeYIO8rwnG0YzVt9pld4yelYX3+3+8tvLjYgO1/vLP1ltYkRqjUOK+siv63kFZNrpOqpTqiRKuk3FyIkE3EiIF6pBWSTFyKjTBWTcAwFRFyYERcVAEBfpA9ouIAGJNRUCAI0jtG8CBAkiCYuBBkE1K9UpMCneQTK1QngE12HEipRSZEqqNMCmJVoiBVAiJAMRECYiIEjiFiIEymIkBZVESimIiBAkmIgQYEmIE/iso2JF80SL95B3O8RApkmTECBERA//9k=" 
      className="inline-block rounded"/>
      <div className='p-4 bg-[#fda3] flex flex-col justify-center items-center rounded'>
        <h1>Event Name</h1>
        <span className='block my-4'><FontAwesomeIcon icon={faCalendar}/> 22 May 2022 </span>
        <span className='block my-4'><FontAwesomeIcon icon={faLocationDot} /> Heydər Əliyev Sarayı</span>
        <button className='p-4 bg-[#da23] rounded-2xl block float-right'>Explore <FontAwesomeIcon icon={faArrowRight} /></button>
      </div>
    </div>
    <div className="flex rounded-2xl my-8">
      <img src="data:image/jpeg;base64,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" 
      className="inline-block rounded"/>
      <div className='p-4 bg-[#fda3] flex flex-col justify-center items-center rounded'>
        <h1>Event Name</h1>
        <span className='block my-4'><FontAwesomeIcon icon={faCalendar}/> 22 May 2022 </span>
        <span className='block my-4'><FontAwesomeIcon icon={faLocationDot} /> Heydər Əliyev Sarayı</span>
        <button className='p-4 bg-[#da23] rounded-2xl block float-right'>Explore <FontAwesomeIcon icon={faArrowRight} /></button>
      </div>
    </div>
    <div className="flex rounded-2xl my-8">
      <img src="data:image/jpeg;base64,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" 
      className="inline-block rounded"/>
      <div className='p-4 bg-[#fda3] flex flex-col justify-center items-center rounded'>
        <h1>Event Name</h1>
        <span className='block my-4'><FontAwesomeIcon icon={faCalendar}/> 22 May 2022 </span>
        <span className='block my-4'><FontAwesomeIcon icon={faLocationDot} /> Heydər Əliyev Sarayı</span>
        <button className='p-4 bg-[#da23] rounded-2xl block float-right'>Explore <FontAwesomeIcon icon={faArrowRight} /></button>
      </div>
    </div>
    <div className="flex rounded-2xl my-8">
      <img src="data:image/jpeg;base64,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" 
      className="inline-block rounded"/>
      <div className='p-4 bg-[#fda3] flex flex-col justify-center items-center rounded'>
        <h1>Event Name</h1>
        <span className='block my-4'><FontAwesomeIcon icon={faCalendar}/> 22 May 2022 </span>
        <span className='block my-4'><FontAwesomeIcon icon={faLocationDot} /> Heydər Əliyev Sarayı</span>
        <button className='p-4 bg-[#da23] rounded-2xl block float-right'>Explore <FontAwesomeIcon icon={faArrowRight} /></button>
      </div>
    </div>
   </div>
    </>
  )
}
export default Main