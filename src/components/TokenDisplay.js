import React from 'react';
import './tokenDisplay.css';

const TokenDisplay = (props) => {
    const [price, setPrice] = React.useState(Math.floor(props.price));
    const [change1d, setChange1d] = React.useState(props.change1d);
    const [marketCap, setMarketCap] =  React.useState(Math.floor(props.marketCap));
    const [volume, setVolume] = React.useState(Math.floor(props.volume));
    const indicatorStyle = {
        color : (change1d <= 0)? "red" : "green",
        background : (change1d <= 0)? "rgb(255, 114, 114)" : "rgb(136, 253, 13)"
    }
    const indicator1wStyle = {
        color : (props.change1w <= 0)? "red" : "green",
        background : (props.change1w <= 0)? "rgb(255, 114, 114)" : "rgb(136, 253, 13)"
    }
    const [extraInfo, setExtraInfo] = React.useState(true);
    const toggleExtraInfo = () => (setExtraInfo(prev => (!prev)))
    const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
    React.useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener('resize', changeWidth);
    }, []);
    return ( 
        <>
                <tr className="token" onClick={toggleExtraInfo}>
            <td className='rank'>{props.rank}</td>
            <td className='coin'>
                <div>
                <img src={props.icon} alt="" />
                <h1>{props.symbol}</h1>
                </div>
            </td>
            <td className='price'>
                ${price}
            </td>
            {
                    (screenWidth > 700) &&
                    <>
                    <td>${marketCap}</td>
                    <td>{volume}</td>
                    </>
                }
            <td className='change1d'>
                <p style={indicatorStyle}>{change1d}%</p>
            </td>

        </tr>
            {
                (extraInfo == true) &&
                <td colSpan={6}>
                <ul className='extra-info'>
                    <li><h3>Name:</h3>{props.name}</li>
                    <li><h3>Supply:</h3>{props.supply}</li>
                    <li><h3>Available Supply:</h3>{props.availSupply}</li>
                    <li><h3>Change(1 week):</h3><span style={indicator1wStyle}>{props.change1w}%</span></li>
                </ul>
                </td>
            }
        </>
     );
}
 
export default TokenDisplay;