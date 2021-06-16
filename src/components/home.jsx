import React from "react";
import "../style/dashboard.css"

function Home(){

    React.useEffect(()=>{
       const script = document.createElement('script');
       script.src="https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js";
       script.type="text/javascript";
       script.async=true;
       script.innerHTML= {
        "colorTheme": "dark",
    "dateRange": "12M",
    "exchange": "BSE",
    "showChart": true,
    "locale": "in",
    "largeChartUrl": "",
    "isTransparent": false,
    "showSymbolLogo": true,
    "width": "400",
    "height": "600",
    "plotLineColorGrowing": "rgba(24, 72, 204, 1)",
    "plotLineColorFalling": "rgba(24, 72, 204, 1)",
    "gridLineColor": "rgba(42, 46, 57, 1)",
    "scaleFontColor": "rgba(120, 123, 134, 1)",
    "belowLineFillColorGrowing": "rgba(33, 150, 243, 0.12)",
    "belowLineFillColorFalling": "rgba(33, 150, 243, 0.12)",
    "symbolActiveColor": "rgba(33, 150, 243, 0.12)"
            };
    document.querySelector('.tradingview-widget-container').appendChild(script);
    }, [] );

    return (<div id="dashboard">

<div id="background">

    <div id="profile">
    <p>Abhishek Kumar Rabidas</p>
    <img src="https://codigo-plataforma.github.io/Website/images/pic.jpg" alt="profile-pic" />
    </div>
    
    <div class="tradingview-widget-container">
    <h2 id="widget-headline">Stock Market Live Data</h2>
        <div class="tradingview-widget-container__widget"></div>
    </div>
   </div>
    </div>);
}
export default Home;