import React from 'react'
import axios from "../utils/axios";
import instance from '../utils/axios';

const About = () => {
   const getProduct = async () => {
     try {
      //  axios here use with the instance we created in src/utils/axios.jsx, which has interceptors for logging requests and responses kilan data request gese and kilan response aice ta dekar lagin basically amra axios.get er jaygay instance.get use korbo, jeta src/utils/axios.jsx file e export kora hoyeche
       const { data } = await instance.get("products");
       console.log(data);
     } catch (error) {
       console.error("Error fetching data:", error);
     }
   };

   getProduct();
  return (
    <div className=''>About</div>
  )
}

export default About