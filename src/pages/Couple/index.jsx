import bride from '../../assets/bride.png';
import groom from '../../assets/groom.png';
import dan from '../../assets/dan.png';
import { CgInstagram } from 'react-icons/cg';

const Couple = () => {
  return (
    <section style={{ zIndex: 5, position: 'relative' }} className='py-4 bgCouple' id='couple'>
        <div className="container">
            <div className="px-1">
                <p className="bohemeFloral text-center fw-bold w-100 mx-auto textPrime mb-3" style={{ fontSize: '3rem' }} data-aos="fade-up" data-aos-easing="ease-in" data-aos-duration="2000">Bride & Groom</p>

                <div className="d-flex flex-column justify-content-center align-items-center py-4">
                    <div className="bride">
                        <img className='w-50' src={bride} alt="bride" style={{ borderRadius: '4rem 0.6rem 0.6rem 0.6rem ', borderColor: 'rgba(91, 20, 21, 0.9)', borderWidth: '3px', borderStyle: 'solid', borderSpacing:'2px' }}  data-aos="zoom-in" data-aos-duration="3000"/>
                        <div>
                            <p className="bohemeFloral mb-0 fw-semibold ps-5 pb-3 textPrime" style={{ fontSize: '2.6rem', marginTop: '-1.5rem' }}>Anom</p>
                            <p className="fraunces w-50 mb-0 textPrime" style={{ lineHeight: '1', fontSize: '2rem' }}>Anomnim A ininimnin</p>
                            
                            <div className="pt-3 montserrat fw-semibold" style={{ fontSize: '0.87rem' }}>
                                <p className="mb-0" data-aos="fade-up" data-aos-duration="3000">Putri ke-21 dari:</p>
                                <p className="mb-0" data-aos="fade-up" data-aos-duration="3000">Bapak Micky Ahmad</p>
                                <p  data-aos="fade-up" data-aos-duration="3000">& Ibu Hanifah</p>
                                <a href='https://www.instagram.com/ikhtiar_r/' target='__blank'  className="d-flex p-2 rounded-circle justify-content-center align-items-center bgButtonPrime" data-aos="fade-left" data-aos-duration="2800" style={{ width: '40px', height: '40px' }}>
                                    <CgInstagram className="fs-5 text-white shadow-lg"/>
                                </a>
                            </div>

                        </div>
                    </div>

                    <div className="my-5 text-center bohemeFloral fw-semibold">
                        <img height={50} src={ dan } alt="&" srcset="" data-aos="flip-up" data-aos-duration="2100"/>
                    </div>

                    <div className="groom text-end">
                        <img className='w-50' src={groom} alt="bride" style={{ borderRadius: '0.6rem 0.6rem 4rem 0.6rem ', borderColor: 'rgba(91, 20, 21, 0.9)', borderWidth: '3px', borderStyle: 'solid', borderSpacing:'2px' }} data-aos="zoom-in" data-aos-duration="2000"/>
                        <div className="">
                            <p className="bohemeFloral mb-0 fw-semibold pe-5 pb-3 textPrime" style={{ fontSize: '2.6rem', marginTop: '-1.5rem' }}>Anom</p>
                            <p className="fraunces mb-0 textPrime" style={{ lineHeight: '1', fontSize: '2rem' }}>Anomnim A <br/>ininimnin</p>
                            
                            <div className="pt-3 montserrat fw-semibold " style={{ fontSize: '0.87rem' }}>
                                <p className="mb-0" data-aos="fade-up" data-aos-duration="3000">Putri ke-21 dari:</p>
                                <p className="mb-0" data-aos="fade-up" data-aos-duration="3000">Bapak Micky Ahmad</p>
                                <p  data-aos="fade-up" data-aos-duration="3000">& Ibu Hanifah</p>
                                <a href='https://www.instagram.com/ikhtiar_r/' target='__blank'  className="d-flex p-2 rounded-circle justify-content-center align-items-center bgButtonPrime float-end" data-aos="fade-right" data-aos-duration="2800" style={{ width: '40px', height: '40px' }} >
                                    <CgInstagram className="fs-5 text-white shadow-lg"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Couple
