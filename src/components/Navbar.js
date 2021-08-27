import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const Navbar = () =>{

    const [active, setActive] = useState('About');

    useEffect(() => {
        let currentUrl = window.location.href;
        if(currentUrl.endsWith('/'))
        setActive('About');
        else if(currentUrl.endsWith('/resume'))
        setActive('Resume');
        else if(currentUrl.endsWith('/projects'))
        setActive('Projects');
    }, [active])
    return (
        <div className="navbar">
            <div className="nav-active">
            {active}
            </div>
            <div className="nav-items">

            <Link to="/">
            {active!=='About' && 
            <div className="nav-item" onClick={()=>{setActive('About')}}>About</div>
            }
            </Link>

            <Link to="/resume">
            {active!=='Resume' && 
            <div className="nav-item" onClick={()=>{setActive('Resume')}}>Resume</div>
            }
            </Link>
            <Link to="/projects">
            {active!=='Projects' && 
            <div className="nav-item" onClick={()=>{setActive('Projects')}}>Projects</div>
            }
            </Link>
            
           

            </div>
        </div>
    )
}

export default Navbar
