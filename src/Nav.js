import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {


    const [show, handleShow] = useState(false);
    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => window.addEventListener('scroll', transitionNavBar);
    }, [])

    return (
        <div className= {`nav ${show && 'nav__black'}`}>
            <div className="nav__contents">
                <img
                    className='nav__logo'
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                <img
                    className='nav__avatar'
                    src="https://lh3.googleusercontent.com/proxy/O8-uP36BeCqU7hPiswwOzxGKvSoNWnhJNmGnqegvWLwpf8Q8PHmxHn7z43tXjW65RzrByyhF9HMW_VHsGbIveD8vE28s061Fe05PVZQoWoRC9_vkqpTA" alt="" />
            </div>

        </div>
    )
}

export default Nav