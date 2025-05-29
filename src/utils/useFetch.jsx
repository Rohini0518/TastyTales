import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      let response = await fetch(url, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("response does not retrived");
      }
      let data = await response.json();
      setData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(fetchData, [url]);
  return { data, loading, error };
};
export default useFetch;
