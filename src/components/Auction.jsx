import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

export default function Auction() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/categories`,
      });
      setCategories(response.data);
    };
    getCategories();
  }, []);

  return (
    <>
      <h1>Remate</h1>
    </>
  );
}
