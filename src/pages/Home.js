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
                    <h1>what is cryptocurrency?</h1>
                    <img src="/images/glossy-cryptocurrency.png" alt="" />
                    <div className="info">
                    <p>A cryptocurrency is a form of digital asset based on a network that is distributed across a large number of computers. This decentralized structure allows them to exist outside the control of governments and central authorities.</p>
                    <p>The advantages of cryptocurrencies include cheaper and faster money transfers and decentralized systems that do not collapse at a single point of failure.</p>
                    </div>
                    <Link className='tracker-btn' to="/tracker"><button>Track</button></Link>
                </article>
            </section>

            <section className="crypto-analysis">
                <article>
                    <h1>Basic crypto terms</h1>
                    <img src="/images/glossy.png" alt="" />
                    <div className="info">
                    <p>Information about how the asset currently trades, what it traded at previously, liquidity, etc. can all come in handy in fundamental analysis. However, other interesting metrics that might fall under this category are those that concern the economics and incentives of the crypto asset's protocol.</p>
                    <p>
                        <ul>
                            <li>
                                <h2>Market cap:</h2>
                                <p> Market capitalization (or network value) is calculated by multiplying the circulating supply with the current price. Essentially, it represents the hypothetical cost to buy every single available unit of the crypto asset (assuming no slippage)</p>
                            </li>
                            <li>
                                <h2>Volume:</h2>
                                <p> Trading volume is an indicator that can help us determine liquidity. It can be measured in a few ways and serves to show how much value has been traded within a given time period. Typically, charts display the daily trading volume (denominated in native units or in dollars).</p>
                            </li>
                        </ul>
                    </p>
                    </div>
                    <Link className='tracker-btn' to="/tracker"><button>Track</button></Link>
                </article>
            </section>

        </section>
     );
}
 
export default Home;