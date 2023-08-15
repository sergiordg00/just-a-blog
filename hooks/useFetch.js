import { useEffect, useRef, useState } from "react";

import { globalClientCache } from "@/lib/GlobalClientCache";

const API_URL = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api`;

/** This hook is just built for this project. Uses the simple cache system for avoiding unnecessary requests */
export default function useFetch(endpoint) {
  const [data, setData] = useState(globalClientCache.get(endpoint));
  const [loading, setLoading] = useState(!data);
  const [error, setError] = useState(null);
  const currentEndpoint = useRef(endpoint);

  async function fetchData() {
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}${endpoint}`);
      const data = await response.json();

      if(endpoint === currentEndpoint.current) {
        setData(data);
        setLoading(false);
      }

      globalClientCache.set(endpoint, data);
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