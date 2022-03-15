import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import NotAvailable from "./NotAvailable";

const HandleRedirect = () => {
  const [destination, setDestination] = useState(null);
  const [error, setError] = useState(false);
  const { shortURL } = useParams();
  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get(`/api/${shortURL}`);
        setDestination(data);
      } catch (error) {
        setError(error.response);
      }
    }
    getData();
  }, [shortURL]);
  useEffect(() => {
    if (destination) {
      window.location.replace(destination);
    }
  }, [destination]);

  if (!destination && !error) {
    return <Loader />;
  }

  return error && <NotAvailable />;
};

export default HandleRedirect;
