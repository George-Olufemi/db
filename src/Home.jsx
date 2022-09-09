import React, { useState, useEffect } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState(null);

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        navigate("/")
    }

    useEffect(() => {
      axios.get(process.env.REACT_APP_DATABASE_DATA)
      .then(response => setData(response.data))
    }, [])

    const handlePost = () => {
      axios.post(process.env.REACT_APP_DATABASE_DATA, {
            "item": "Hamburger",
            "image": "/logo192.png"
      })
      .then(response => setData(response.data))
    }

  return (
    <div>
        <h1>Dashboard</h1>
          <div>
            <h2>Items</h2>
            {
              data ? data.map((d, idx) => (
                <div key={idx}>
                  <p>{ d.item }</p>
                  <img src={ d.image } alt="" />
                </div>
              )) : null
            }
            <div onClick={handlePost} className="btnn">ADD</div>
          </div>
        <div onClick={handleLogout} className="btn">Logout</div>
    </div>
  )
}

export default Home;
