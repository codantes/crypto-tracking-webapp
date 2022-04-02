import React from 'react';
import TokenDisplay from './TokenDisplay';
import './trackerDisplay.css';

const TrackerDisplay = () => {
    const [data, setData] = React.useState([]);
    const [tokenArrayDisplay, setTokenArrayDisplay] = React.useState(null);

    React.useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
        fetch("https://api.coinstats.app/public/v1/coins?skip=0&limit=10", requestOptions)
            .then(response => response.text())
            .then(result => setData(JSON.parse(result).coins))
            .catch(error => console.log('error', error));
    },[])
    
    console.log(data);

    const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
    React.useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener('resize', changeWidth);
    }, []);

    return ( 
        <section className="token-info">
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
                    data.map(token => {
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