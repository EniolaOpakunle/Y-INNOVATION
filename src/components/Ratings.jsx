import React from 'react'

function Ratings() {
  return (
    <div className='w-100 rating'>
        <div className='row size '>
            <div className='col-lg-3 col-md-6 col-sm-6 '>
                <div className=' text-center box rounded py-4 px-4 text-light'>
                    <h2 className=''>182</h2>
                    <p className='title'>HOLDERS</p>
                </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 '>
                <div className=' text-center box rounded py-4 px-4 text-light'>
                    <h2 className=''>30.41</h2>
                    <p className='title'>STAKED[%]</p>
                </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6'>
                <div className='text-center box rounded py-4 px-4 text-light'>
                    <h2 className='' >34846</h2>
                    <p className='title'>TOKEN MCAP [USD]</p>
                </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6'>
                <div className='text-center box rounded py-4 px-4 text-light'>
                    <h2 className=''>1024</h2>
                    <p className='title'>VOLUME TRADED [BNB]</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ratings