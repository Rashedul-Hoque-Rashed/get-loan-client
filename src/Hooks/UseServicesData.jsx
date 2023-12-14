import { useState } from "react";
import UseAxios from "./UseAxios";


const UseServicesData = () => {

  const [services, setServices] = useState([]);
  const axios = UseAxios();

  axios.get('/loans')
    .then(res => {
      setServices(res.data)
    })



  return (
    services
  );
};

export default UseServicesData;