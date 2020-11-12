import './App.css';

import React, { useState, useEffect, useRef } from 'react';

import { useFetch } from './utils';
import Spinner from './components/Spinner';
import User from './components/User';

const App = () => {
  const ref = useRef()
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  const { fetchData, data, loading } = useFetch();

  useEffect(() => {
    setUsers([...users,...data]);
  },[data, setUsers])

  const fetchMore = (entries) => {
    const spinner = entries[0];
    if(spinner.isIntersecting) {
      if(!loading) {
        setPage(page+1);
        fetchData(page+1);
      }
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(fetchMore, {
      root: null,
      rootMargin: '0px 0px 200px 0px' ,
      threshold: 0.25,
    } );

    observer.observe(ref.current);

    return () => observer.unobserve(ref.current);
  })

  return (
    <div style={{margin: '20px auto', width: 'fit-content'}}>
      {users.map((data,index) => <User key={index} {...data} />)}
      <Spinner ref={ref}/>
    </div>
  )
}

export default App;
