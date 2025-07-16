import React from 'react';
function Awards() {
    return ( 
        <div className='container mt-5 p-4'>
            <div className='row ' >
                <div className='col-6  p-5'>
                    <img src="/assets/largestBroker.svg" alt="Largest Broker" />
                </div>
                <div className='col-6 p-5 mt-3' >
                        <h2>Largest stock Broker in India</h2>
                        <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in: stocks, futures, options, commodities, and more.</p>
                        <div className='row'>
                            <div className='col-6'>
                                <ul>
                                    <li style={{fontSize: "0.9rem"}}>
                                        <p> Futures and Options </p>
                                    </li>
                                    <li style={{fontSize: "0.9rem"}}>
                                        <p> Commodity derivatives </p>
                                    </li>
                                    <li style={{fontSize: "0.9rem"}}>
                                        <p> Currency derivatives </p>
                                    </li>    
                                </ul>
                            </div>
                            <div className='col-6'>
                                <ul>
                                    <li style={{fontSize: "0.9rem"}}>
                                        <p> Stocks & IPOs </p>
                                    </li>
                                    <li style={{fontSize: "0.9rem"}}>
                                        <p> Direct mutual funds </p>
                                    </li>
                                    <li style={{fontSize: "0.9rem"}}>
                                        <p> Bonds and Govt .Securities </p>
                                    </li>    
                                </ul>
                            </div>
                        </div>
                        <img  src='/assets/pressLogos.png' style={{width : "90%"}}/>
                </div>
            </div>
        </div>

     );     
}

export default Awards;
