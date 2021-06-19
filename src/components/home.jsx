import React from "react";
import "../style/dashboard.css";
import wave from "../images/wave.png";
import top from "../images/top.jpg";

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


        <div id="top-image">
            <img src={top} alt="top" />
        </div>

        <div id="card-wrapper">
            <div className="card">
            <i class="fas fa-university"></i>
                <div className="card-right">
                    <h3>Premium Banking</h3>
                    <p>A premier banking program designed with an array of offers.</p>
                </div>
            </div>
            <div className="card">
            <i class="fas fa-piggy-bank"></i>
                <div className="card-right">
                    <h3>Savings Account</h3>
                    <p>Pioneer Savings Account combines a series of top privileges.</p>
                </div>
            </div>
            <div className="card">
            <i class="fas fa-shield-alt"></i>
                <div className="card-right">
                    <h3>Robust Security</h3>
                    <p>Tailor made solution for your delight, 100% safe and secure.</p>
                </div>
            </div>
        </div>


        <div id="content-container">
            <div className="content-box">
                <div className="left">
                    <img src="https://img2.pngio.com/index-of-wp-content-uploads-2016-03-bank-vector-png-600_300.png" alt="bank" />
                </div>
                <div className="right">
                <h1>About us</h1>
                <p>The Bank has gone through the various phases of its growth trajectory over hundred years of its existence. Growth of BootCat Bank was phenomenal. attaining the status of a national level player in terms of geographical reach and clientele segments. Eighties was characterized by business diversification for the Bank.</p>
                </div>
                
            </div>
            <div className="content-box">
                <div className="left">
                    <img src="https://superdr.in/home/images/mission.png" alt="mission" />
                </div>
                <div className="right">
                <h1>Mission</h1>
                <p>To provide a secure, agile, dynamic and conducive banking environment to customers with commitment to values and unshaken confidence, deploying the best technology, standards, processes and procedures where customer convenience is of significant importance and to increase the stakeholders’ value.</p>
                </div>
            </div>
            <div className="content-box">
                <div className="left">
                    <img src="https://i.pinimg.com/originals/57/0c/9e/570c9e66391ccae6756b9ba775477f09.png" alt="vision" />
                </div>
                <div className="right">
                <h1>Vision</h1>
                <p>To emerge as a ‘Preferred Bank’ by pursuing global benchmarks in profitability, operational efficiency, asset quality, risk management and expanding the global reach. Provide advanced and creative banking products and services for all our clients, both locally and internationally</p>
                </div>
            </div>
        </div>


   {/*  <div id="top">
            <h1>BOOTCAT Bank</h1>
            <p>The Bank that expands horizons. The most transparent and secure banking system.</p>
    </div> */}
   {/*  <div id="profile">
    <p>Abhishek Kumar Rabidas</p>
    <img src="https://codigo-plataforma.github.io/Website/images/pic.jpg" alt="profile-pic" />
    </div> */}

    <h1 id="widget-headline">Stock Market Live Data</h1>
    <div id="trading">
    <div class="tradingview-widget-container">
    
    <div class="tradingview-widget-container__widget"></div>
</div>
    </div>
    
    </div>);
}
export default Home;