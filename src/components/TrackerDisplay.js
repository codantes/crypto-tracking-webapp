import React from 'react';
import TokenDisplay from './TokenDisplay';
import './trackerDisplay.css';

const TrackerDisplay = () => {
    const [data, setData] = React.useState([]);
    const [filteredCoin, setFilteredCoin] = React.useState(data);
    const [search, setSearch] = React.useState('');

    React.useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
        fetch("https://api.coinstats.app/public/v1/coins?skip=0&limit=10", requestOptions)
            .then(response => response.text())
            .then(result => setData(JSON.parse(result).coins))
            .catch(error => console.log('error', error));
    },[data])
    
    const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
    React.useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener('resize', changeWidth);
    }, []);

    const handleChange = e => {
        setSearch(e.target.value);
      };
    
      const filteredCoins = data.filter(coin =>
        coin.id.toLowerCase().includes(search.toLowerCase())
      );
    


    return ( 
        <section className="token-info">

            <form >
                <label htmlFor="token-search">Search currency</label>
                <div className="search-bar">
                    <img src="/images/search-icon.svg" alt="" />
                    <input 
                    type="text" 
                    name="token-search" 
                    id="token-seacrch"
                    onChange={handleChange}/>
                </div>
            </form>

            <div className="warning">
                {
                    (screenWidth < 700) &&
                    <p>*rotate your device for more information</p>
            
                }
                <p>*click the currency for more information</p>
            </div>

            <table className="token-table">
            <thead>
            <tr> 
                <th id='rank'>rank</th>
                <th>coin</th>
                <th>price</th>
                {
                    (screenWidth > 700) &&
                    <>
                    <th>market cap</th>
                    <th>volume</th>
                    </>
                }
                <th id='change1d'>change(24h)</th>
            </tr>
            </thead>
                <tbody>
                {
                    filteredCoins.map(token => {
                        return(
                            <TokenDisplay
                                key = {token.id}
                                rank = {token.rank}
                                icon = {token.icon}
                                name = {token.name}
                                symbol = {token.symbol}
                                price = {token.price}
                                change1d = {token.priceChange1d}
                                change1h = {token.priceChange1h}
                                change1w = {token.priceChange1w}
                                marketCap = {token.marketCap}
                                volume = {token.volume}
                                supply = {token.totalSupply}
                                availSupply = {token.availableSupply}
                                web = {token.websiteUrl}
                            />
                        )
                    })
                }
                </tbody>
            </table>
        </section>
     );
}
 
export default TrackerDisplay;