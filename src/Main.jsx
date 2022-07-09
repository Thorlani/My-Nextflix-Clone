import React from 'react'
import './Main.css'
import Axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from './asset/Logo.png'
import avatar from './asset/avatar.png'
import request from './Resquest'

const Main = () => {

    let navigate = useNavigate()
    const [movies, setMovies] = useState([])
    const [horror, setHorror] = useState([])
    const [topRated, setTopRated] = useState([])
    const [upComing, setUpComing] = useState([])
    const [popular, setPopular] = useState([])

    useEffect(() => {
        Axios.get(request.requestPopular).then((res) => {
            setMovies(res.data.results)
        }).catch((err) => {
            console.log(err)
        })
    },[])

    const wallpaper = movies[Math.floor(Math.random() * movies.length)]

    function move() {
        navigate('/')
    }

    useEffect(() => {
        Axios.get(request.requestTrending).then((res) => {
            setTopRated(res.data.results)
        }).catch(function (err) {
            console.log(err)
        })
    }, [])
    useEffect(() => {
        Axios.get(request.requestPopular).then((res) => {
            setPopular(res.data.results)
        }).catch(function (err) {
            console.log(err)
        })
    }, [])
    useEffect(() => {
        Axios.get(request.requestUpcoming).then((res) => {
            setUpComing(res.data.results)
        }).catch(function (err) {
            console.log(err)
        })
    }, [])
    useEffect(() => {
        Axios.get(request.requestHorror).then((res) => {
            setHorror(res.data.results)
        }).catch(function (err) {
            console.log(err)
        })
    }, [])

    const trend = topRated.map((item) => {
        return (
            <div key={item.id} className='rows'>
                <img 
                    src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`} 
                    alt={item?.title + 'image'} 
                    className='image'
                />
                <p className='title-active'>{item.title}</p>
            </div>
        )
    })
    const popularShow = popular.map((item) => {
        return (
            <div key={item.id} className='rows'>
                <img 
                    src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`} 
                    alt={item?.title + 'image'} 
                    className='image'
                />
                <p className='title-active'>{item.title}</p>
            </div>
        )
    })
    const horrorShow = horror.map((item) => {
        return (
            <div key={item.id} className='rows'>
                <img 
                    src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`} 
                    alt={item?.title + 'image'} 
                    className='image'
                />
                <p className='title-active'>{item.title}</p>
            </div>
        )
    })
    const upcome = upComing.map((item) => {
        return (
            <div key={item.id} className='rows'>
                <img 
                    src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`} 
                    alt={item?.title + 'image'} 
                    className='image'
                />
                <p className='title-active'>{item.title}</p>
            </div>
        )
    })

  return (
    <>
        <header className='header'>
            <nav className='nav'>
                <div>
                    <img onClick={move} src={logo} alt="Nextflix Logo" className='title'/>
                </div>
                <div>
                    <img src={avatar} alt="Account Avatar" className='avatar'/>
                </div>
            </nav>
            <img className='wallpaper' src={`https://image.tmdb.org/t/p/original/${wallpaper?.backdrop_path}`} alt={wallpaper?.title} />
            <div className='gradienttt'></div>
            <div className='wrapperr'>
                <h1 className='mainTitle'>{wallpaper?.title}</h1>
                <div>
                    <button className='btn1'>Play</button>
                    <button className='btn2'>Watch Later</button>
                </div>
                <p className='release'>Release: {wallpaper?.release_date}</p>
                <p className='mainOverview'>{wallpaper?.overview}</p>
            </div>
        </header>
        <main>
            <div>
                <h1>Popular Movies</h1>
                <div className='itemContainer'>
                {popularShow}
                </div>
            </div>
            <div>
                <h1>Trending Movies</h1>
                <div className='itemContainer'>
                {trend}
                </div>
            </div>
            <div>
                <h1>Horror Movies</h1>
                <div className='itemContainer'>
                {horrorShow}
                </div>
            </div>
            <div>
                <h1>Upcoming Movies</h1>
                <div className='itemContainer'>
                {upcome}
                </div>
            </div>
        </main>
    </>
  )
}

export default Main