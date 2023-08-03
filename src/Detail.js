import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Detail.css"

function Detail() {
    const {fld_id} = useParams()
    const [tenderdetail , setTenderDetails] = useState({})

    useEffect(()=>{
      async function detail_page(){

        const form_fill = new FormData();

        form_fill.append("tender_id" ,fld_id )
        form_fill.append('user_id', '1389');
        form_fill.append('fin_year', '2023-2024');

        try{
         const fetch = await axios.post("https://api.growthgrids.com/bd_growthgrids/index.php/Tender_details",
         form_fill ,{
          headers:{
            "Auth-Token" :"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpbmlkIjoiMTM4OSIsInVzZXJuYW1lIjoiVmluYXkgSmFpbiIsIkFQSV9USU1FIjoxNjkxMDM2Mzc0fQ.UstP_tQbLXv56sIDvqIGwXEPcKHtEHr1UH7PDYA1Rs0"
          }
         })

        //  const result = fetch.data
         console.log("detail" , fetch.data.data)
         setTenderDetails(fetch.data.data)


        }
        catch{
          console.log('Error in API call:');
        }
      }


      detail_page()
    },[])

  return (
    <div className='detail_page'>
      <h2>Tender Detail</h2>
     
        <h2>Detail : {tenderdetail.tender_details}</h2>
        <p>Bid Opening Date :  {tenderdetail.bid_opening_time}</p>
        <p>Last Date for Submission : {tenderdetail.bid_submission_end_date}</p>
        <p>Tender Amount Value : {tenderdetail.currency_name} {tenderdetail.tender_amnt_val}</p>
        <h3>Country:<span> {tenderdetail.country_name} </span></h3>
        <p>{tenderdetail.sectName}</p>
        <p>State: {tenderdetail.state_name}</p>
        <p>City: {tenderdetail.city_name}</p>
        <p>{tenderdetail.tnd_published_date}</p>
      
      
      
    </div>
  )
}

export default Detail