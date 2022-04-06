import React from 'react';
import {Link} from 'react-router-dom';
import './home.css';

const Home = () => {
    return ( 
        <section>
            <header>
            <img className='wave-1' src="./images/wave.png" alt="" />
            <nav className='topnav'>
                <ul className='menu'>
                    <li className='top-logo'>
                        <img src="/images/logo-app.png" alt="" />
                        <h1>CoinTrail</h1>
                    </li>
                    <li className='tracker-link'><Link to="/tracker"><button>Track</button></Link></li>
                </ul>
            </nav>
            <section className="banner">
                <h1>know Your coins</h1>
            </section>
            </header>

            <section className="crypto-intro">
                <article>
                    <h1>what is cryptocurrency</h1>
                </article>
            </section>

        </section>
     );
}
 
export default Home;