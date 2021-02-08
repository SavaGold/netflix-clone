import React from 'react'
import Banner from './Banner.js'
import './HomeScreen.css'
import Nav from './Nav.js'
import requests from './Request.js'
import Row from './Row.js'

function HomeScreen() {
    return (
        <div className='homeScreen'>
            {/* Nav Bar */}
            <Nav />

            {/* Banner */}
            <Banner />

            {/* Row */}
            <Row 
            title='NETFLIX ORIGINALS'
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
            />
             <Row 
            title='Top Rated'
            fetchUrl={requests.fetchTopRated}
            />
             <Row 
            title='Trending Now'
            fetchUrl={requests.fetchTrending}
            />
             <Row 
            title='Action Movies'
            fetchUrl={requests.fetchActionMovies}
            />
        </div>
    )
}

export default HomeScreen
