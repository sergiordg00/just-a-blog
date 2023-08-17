import { useEffect, useRef, useState } from "react";

import { globalClientCache } from "@/lib/GlobalClientCache";
import { client } from "@/lib/sanity";

/** This hook is just built for this project. Uses the simple cache system for avoiding unnecessary requests */
export default function useFetch(endpoint) {
  const [data, setData] = useState(globalClientCache.get(endpoint));
  const [loading, setLoading] = useState(!data);
  const [error, setError] = useState(null);
  const currentEndpoint = useRef(endpoint);

  async function fetchData() {
    setLoading(true);

    try {
      const data = await client.fetch(endpoint);

      globalClientCache.set(endpoint, data);
      
      if(endpoint === currentEndpoint.current) {
        setData(data);
        setLoading(false);
      }
    } catch(err) {
      setError(true);
    }
  }

  function updateData(newData) {
    setData(newData);
    globalClientCache.update(endpoint, newData);
  }

  useEffect(() => {
    currentEndpoint.current = endpoint;

    const dataFromCache = globalClientCache.get(endpoint);

    if(!dataFromCache) {
      fetchData();
    } else {
      setData(dataFromCache);
      setLoading(false);
    }
  }, [endpoint]);

  return { data, loading, error, updateData };
}