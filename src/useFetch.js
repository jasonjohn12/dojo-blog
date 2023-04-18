import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [isPending, setIsPending] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setIsPending(false);
      });
  }, [url]);
  return {
    data,
    error,
    isPending,
  };
};
export default useFetch;
