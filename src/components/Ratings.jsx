import React from 'react'
import { useState, useEffect } from 'react'

function Ratings() {
    const endHolder = 182
    const endStake = 30.41;
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
        }, 20);

        const stakeInterval = setInterval(() => {
            setStake((prevCount) => {
                if (prevCount < endStake) {
                    return prevCount + 0.01; // Adjust the increment as needed
                } else {
                    clearInterval(stakeInterval);
                    return prevCount;
                }
            });
        }, 50); // Adjust the interval duration as needed

        const tokenInterval = setInterval(() => {
            setToken((prevCount) => {
                if (prevCount < endToken) {
                    return prevCount + 10; // Adjust the increment as needed
                } else {
                    clearInterval(tokenInterval);
                    return prevCount;
                }
            });
        }, 100); // Adjust the interval duration as needed

        const bnbInterval = setInterval(() => {
            setBnb((prevCount) => {
                if (prevCount < endBnb) {
                    return prevCount + 1; // Adjust the increment as needed
                } else {
                    clearInterval(bnbInterval);
                    return prevCount;
                }
            });
        }, 30); // Adjust the interval duration as needed

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
                    <h2 className=''>{stake}</h2>
                    <p className='title'>STAKED[%]</p>
                </div>
            </div>
            <div className='col-lg-3 col-md-6'>
                <div className='text-center box rounded py-4 px-4 text-light'>
                    <h2 className='' >{token}</h2>
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