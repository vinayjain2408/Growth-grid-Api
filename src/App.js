import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function App() {
  const [finalData , setFinalData] = useState([])

  useEffect(() => {
    async function postFormData() {
      const formData = new FormData();
      formData.append('user_id', '1389');
      formData.append('fin_year', '2023-2024');
      formData.append('limit', '20'); 
      formData.append('page_number', '0');

      try {
        const response = await axios.post('https://api.growthgrids.com/bd_growthgrids/index.php/LatestTenders_fin_year',
          formData);
        const result = response.data;
        console.log('Success:', result.data.data);
        setFinalData(result.data.data);
      } catch (error) {
        console.log('Error in API call:', error);
      }
    }

    postFormData();
  }, []);

  return (
    <>
    <div className="App">
    <h1>Growth Grid</h1>
    <div>
    {
      finalData.map((table, index) => {
        return (
          <div className='sheet' key={index}> 
            <h3>
              <Link to={`/detail/${table.fld_id}`}> {table.client_name}</Link>
              
              </h3> 
            <p>{table.country_name}</p>
            <p>Tender ID : {table.fld_id}</p>
            <p>{table.state_name}</p>
            <p>{table.tender_details}</p>
            <p>Rs {table.tender_amnt_val}</p>
          </div>
        )
      })
    }
    </div>
  </div>
  </>
  );
}

export default App;










// import React, { useEffect } from 'react';
// import './App.css';
// import axios from 'axios';

// function App() {
//   useEffect(() => {
//     async function postJSON() {
//       const formData = new FormData();
//       formData.append('user_id', '1389');
//       formData.append('fin_year', '2023-2024');
//       formData.append('limit', 10);
//       formData.append('page_number', 0);

//       try {
//         const response = await axios.post(
//           'https://cors-anywhere.herokuapp.com/https://api.growthgrids.com/bd_growthgrids/index.php/LatestTenders_fin_year',
//           formData,
//           {
//             headers: {
//               'Content-Type': 'application/json',
//             },
//           }
//         );
//         const result = response.data;
//         console.log('Success:', result);
//       } catch (error) {
//         console.log('Error in API call:', error);
//       }
//     }

//     postJSON();
//   }, []);

//   return (
//     <div className="App">
//       <h1>App</h1>
//     </div>
//   );
// }

// export default App;












  // useEffect(() => {
  //   fetch('https://api.growthgrids.com/bd_growthgrids/index.php/LatestTenders_fin_year', {
  //     method: 'POST',
  //     mode: "cors",
  //     body: JSON.stringify({
  //       user_id: 1389,
  //       limit: 10,
  //       page_number: 0,
  //       // Add parameters here
  //     }),
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       // Handle data
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []); // Empty dependency array to run the fetch only once on component mount