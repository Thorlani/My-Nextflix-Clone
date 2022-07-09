import React from 'react'
import request from '../Resquest'
import './rows.css'
import { useState, useEffect } from 'react'
import Axios from 'axios'

const Rows = () => {

  const [trending, setTrending] = useState([])
  const [horror, setHorror] = useState([])
  const [topRated, setTopRated] = useState([])
  const [upComing, setUpComing] = useState([])

  

  return (
    <>
        <div>
        <h1>Trending Now</h1>
        <div>
          
        </div>
        </div>
        <h1>New Releases</h1>
        <h1>Horror</h1>
        <h1>Top Rated</h1>
        <h1>Anime</h1>
    </>
  )
}

export default Rows