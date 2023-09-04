import React from 'react'
import { useState, useEffect } from 'react'

function Ratings() {
    const endHolder = 182
    const endStake = 30.40;
    const endToken = 34846;
    const endBnb = 1024;
    const [holder, setHolder] = useState(0);
    const [stake, setStake] = useState(0);
    const [token, setToken] = useState(0);
    const [bnb, setBnb] = useState(0);

    useEffect(() => {
        const holderInterval = setInterval(() => {
            setHolder((prevCount) => {
                if (prevCount < endHolder) {
                    return prevCount + 1;
                } else {
                    clearInterval(holderInterval);
                    return prevCount;
                }
            });
        }, 90);

        const stakeInterval = setInterval(() => {
            setStake((prevCount) => {
                if (prevCount < endStake) {
                    return prevCount + 1; // Adjust the increment as needed
                } else {
                    clearInterval(stakeInterval);
                    return prevCount;
                }
            });
        }, 200); // Adjust the interval duration as needed

        const tokenInterval = setInterval(() => {
            setToken((prevCount) => {
                if (prevCount < endToken) {
                    return prevCount + 10; // Adjust the increment as needed
                } else {
                    clearInterval(tokenInterval);
                    return prevCount;
                }
            });
        }, 1); // Adjust the interval duration as needed

        const bnbInterval = setInterval(() => {
            setBnb((prevCount) => {
                if (prevCount < endBnb) {
                    return prevCount + 1; // Adjust the increment as needed
                } else {
                    clearInterval(bnbInterval);
                    return prevCount;
                }
            });
        }, 15); // Adjust the interval duration as needed

        return () => {
            clearInterval(holderInterval);
            clearInterval(stakeInterval);
            clearInterval(tokenInterval);
            clearInterval(bnbInterval);
        };
    }, [endHolder, endStake, endToken, endBnb]);
    

    
  return (
    <div className='w-100 rating'>
        <div className='row size '>
            <div className='col-lg-3 col-md-6'>
                <div className=' text-center box rounded py-4 px-4 text-light'>
                    <h2 className=''>{holder}</h2>
                    <p className='title'>HOLDERS</p>
                </div>
            </div>
            <div className='col-lg-3 col-md-6'>
                <div className=' text-center box rounded py-4 px-4 text-light'>
                    <h2 className=''>Coming soon</h2>
                    <p className='title'>STAKED[%]</p>
                </div>
            </div>
            <div className='col-lg-3 col-md-6'>
                <div className='text-center box rounded py-4 px-4 text-light'>
                    <h2 className='' > <a className='btn fs-5'  href='https://www.dextools.io/app/en/bnb/pair-explorer/0x7bb9cEC01cfAde5AD7681E21462fF596B8Fae47f?utm_source=telegram&utm_medium=bubblebuybot&utm_campaign=bubblebuybot' >Check</a>  </h2>
                    <p className='title'>TOKEN MCAP [USD]</p>
                </div>
            </div>
            <div className='col-lg-3 col-md-6'>
                <div className='text-center box rounded py-4 px-4 text-light'>
                    <h2 className=''>{bnb}</h2>
                    <p className='title'>VOLUME TRADED [BNB]</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ratings