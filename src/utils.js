import { useState, useEffect } from 'react';

export const useFetch = (page = 1,results = 6) => {
  const [data,setData] = useState([]);
  const [loading,setIsLoading] = useState(false)

  const fetchData = (page = 1) => {
    setIsLoading(true);
    fetch(`https://randomuser.me/api?page=${page}&results=${results}&seed=abc`)
      .then(response =>response.json())
      .then(responseData => {
        setData(responseData.results);
        setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchData();
  },[])

  return {fetchData ,data, loading };
}

