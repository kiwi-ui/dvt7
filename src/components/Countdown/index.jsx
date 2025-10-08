import { useEffect, useState } from 'react';

const Countdown = () => {
    const [event, setEvent] = useState({
        days: null,
        hours: null,
        minutes: null,
        seconds: null
    })
    const [isEventOver, setIsEventOver] = useState(false)

    useEffect(() => {
        const targetDate = new Date('2026-09-28T19:00:00');

        setInterval(() => {
            const currentDate = new Date();
            const timeDifference = targetDate - currentDate;
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
            setEvent({ days, hours, minutes, seconds })

            if (timeDifference <= 0) {
                return (setIsEventOver(true));
            }
        }, 1000)
        // return () => clearInterval();
    }, [])

    return (
        <section id="date" className="border-0 position-relative">
                <div className="justify-content-start">
                    {!isEventOver ?
                        <div className="row px-3">
                            <div className="col-3 animate__animated animate__fadeInLeft animate__delay-2s">
                                <div className={`analogue text-center d-flex align-items-center flex-column rounded-2 shadow-sm`}>
                                    <p className={` fs-5 pt-1 mb-0`}>{event.days}</p>
                                    <p className={`m-0 pb-1`} style={{fontSize:'0.7rem'}}>Hari</p>
                                </div>
                            </div>
                            <div className="col-3 animate__animated animate__fadeInLeft animate__delay-1s">
                                <div className={`analogue text-center d-flex align-items-center flex-column rounded-2 shadow-sm`}>
                                    <p className={` fs-5 pt-1 mb-0`}>{event.hours}</p>
                                    <p className={`m-0 pb-1`} style={{fontSize:'0.7rem'}}>Jam</p>
                                </div>
                            </div>
                            <div className="col-3 animate__animated animate__fadeInRight animate__delay-1s">
                                <div className={`analogue text-center d-flex align-items-center flex-column rounded-2 shadow-sm`}>
                                    <p className={` fs-5 pt-1 mb-0`}>{event.minutes}</p>
                                    <p className={`m-0 pb-1`} style={{fontSize:'0.7rem'}}>Menit</p>
                                </div>
                            </div>
                            <div className="col-3 animate__animated animate__fadeInRight animate__delay-2s">
                                <div className={`analogue text-center d-flex align-items-center flex-column rounded-2 shadow-sm`}>
                                    <p className={` fs-5 pt-1 mb-0`}>{event.seconds}</p>
                                    <p className={`m-0 pb-1`} style={{fontSize:'0.7rem'}}>Detik</p>
                                </div>
                            </div>
                        </div>
                        :
                        <p>Acara Sudah Selesai</p>
                    }
                </div>
        </section>
    )
}

export default Countdown
