import bride from '../../assets/bride.png';
import groom from '../../assets/groom.png';
import dan from '../../assets/dan.png';
const Couple = () => {
  return (
    <section style={{ zIndex: 5, position: 'relative' }} className='py-2 bgCouple' id='couple'>
        <div className="container">
            <div className="px-1">
                <p className="bohemeFloral text-center fw-bold w-50 mx-auto" style={{ fontSize: '3.2rem' }}>Bride & Groom</p>

                <div className="d-flex flex-column justify-content-center align-items-center py-4">
                    <div className="bride">
                        <img className='w-50' src={bride} alt="bride" style={{ borderRadius: '4rem 0.6rem 0.6rem 0.6rem ', borderColor: 'rgba(91, 20, 21, 0.9)', borderWidth: '3px', borderStyle: 'solid', borderSpacing:'2px' }}/>
                        <div>
                            <p className="bohemeFloral mb-0 fw-semibold ps-5 pb-3 textPrime" style={{ fontSize: '2.6rem', marginTop: '-1.5rem' }}>Anom</p>
                            <p className="fraunces w-50 mb-0" style={{ lineHeight: '1', fontSize: '2rem' }}>Anomnim A ininimnin</p>
                            
                            <div className="pt-3 montserrat fw-medium" style={{ fontSize: '0.87rem' }}>
                                <p className="mb-0">Putri ke-21 dari:</p>
                                <p className="mb-0">Bapak Micky Ahmad</p>
                                <p className="mb-0">& Ibu Hanifah</p>
                            </div>
                        </div>
                    </div>

                    <div className="my-5 text-center bohemeFloral fw-semibold">
                        <img height={50} src={ dan } alt="" srcset="" />
                    </div>

                    <div className="groom text-end">
                        <img className='w-50' src={groom} alt="bride" style={{ borderRadius: '0.6rem 0.6rem 4rem 0.6rem ', borderColor: 'rgba(91, 20, 21, 0.9)', borderWidth: '3px', borderStyle: 'solid', borderSpacing:'2px' }}/>
                        <div className="">
                            <p className="bohemeFloral mb-0 fw-semibold pe-5 pb-3 textPrime" style={{ fontSize: '2.6rem', marginTop: '-1.5rem' }}>Anom</p>
                            <p className="fraunces mb-0" style={{ lineHeight: '1', fontSize: '2rem' }}>Anomnim A <br/>ininimnin</p>
                            
                            <div className="pt-3 montserrat fw-medium" style={{ fontSize: '0.87rem' }}>
                                <p className="mb-0">Putri ke-21 dari:</p>
                                <p className="mb-0">Bapak Micky Ahmad</p>
                                <p className="mb-0">& Ibu Hanifah</p>
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
