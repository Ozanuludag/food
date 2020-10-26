import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errMessage, setErrMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "Miami",
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      setErrMessage("bir şeyler yanlış gitti!");
    }
  };

  useEffect(() => {
    //bir kez render almak için bu metodu kullandık
    searchApi("pasta");
  }, []);
  return [searchApi, results, errMessage];
};
