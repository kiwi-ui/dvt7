import React from 'react'
import Countdown from '../../components/Countdown'
import style from './index.module.css'
const SaveDate = () => {
  return (
    <section className={`position-relative`}>
        <div className={`${style.bgReminder} py-5`}>
            <div className="container position-relative text-white my-5" style={{ zIndex:10 }}>
                <h2 className='text-center bohemeFloral pb-3 fw-bold' style={{ fontSize: '2.7rem' }}>Save The Date</h2>
                <Countdown />
            </div>
        </div>
    </section>
  )
}

export default SaveDate
