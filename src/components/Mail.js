// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import env from '../../env';
//
// function Home (){
//     const [data_, setData] = useState({});
//
//     useEffect(() => {
//         const api_url = env.api_url;
//         const api_key = env.api_header_key;
//         console.log(api_key);
//         // axios.get(`${api_url}/users/user`,{
//         //     headers: {'X-PUBLIC-API-KEY': api_key},
//         //     params: {r:9,d:8}
//         // }).then(response=>{
//         //     if(response.data){
//         //
//         //     }
//         //     console.log(response);
//         // }).catch(errors=>{
//         //     console.log(errors);
//         // });
//
//         // axios.post(`${api_url}/mail/sendMail`,{mail:"a@a.ru",body : "text"},{headers:{'X-PUBLIC-API-KEY': api_key}})
//         //     .then(response=>{
//         //         if(response.data){
//         //             console.log('data',response.data);
//         //         }
//         //         console.log(response);
//         //     }).catch(errors=>{
//         //         console.log(errors);
//         //     });
//     },[]);
//
//     return (
//         <div className="container">
//             Home
//         </div>
//     );
// }
//
// export default Home;
