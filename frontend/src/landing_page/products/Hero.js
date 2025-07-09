import React from 'react';

function Hero() {
    return (
        <div className='container mt-5'>
            <div className='text-center  p-3'>
                <h1 className='mt-5'>Zerodha Products</h1>
                <p className='text-muted mt-3 fs-4'>Sleek, modern, and intuitive trading platforms</p>
                <p className='text-muted mt-3' >Check out our <a href='' style={{textDecoration : "none"}}> investment offerings<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
            </div>
        </div>

    );
}

export default Hero;