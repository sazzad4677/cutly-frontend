import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const HandleRedirect = () => {
  const [destination, setDestination] = useState(null);
  const [error, setError] = useState();
  const { shortURL } = useParams();
  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get(`http://localhost:5000/${shortURL}`);
        setDestination(data);
      } catch (error) {
        setError(error.message);
      }
    }
    getData();
  }, [shortURL]);
  useEffect(() => {
    if (destination) {
      window.location.replace(destination);
    }
  }, [destination]);

  return <div></div>;
};

export default HandleRedirect;
