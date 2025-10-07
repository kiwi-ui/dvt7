import entrance from '../../../assets/opening/entrance.mp4';
import { RiArrowDownDoubleLine } from "react-icons/ri";
import style from './index.module.css';
import initial from '../../../assets/initial.png'
const Opening = () => {
  return (
    <section className='py-5 d-flex justify-content-center align-items-center' style={{ height: '100dvh', position: 'relative', zIndex: 5 }}>
        <video 
            src={entrance}
            autoPlay 
            muted 
            playsInline 
            style={{ objectFit: 'fill'}}
            className='position-absolute start-0 w-100 top-0 h-100'
        ></video>

        <div className="container position-relative my-5 h-75 mx-auto" style={{zIndex:10}}>
            <div className="rounded-pill h-100 p-2" data-aos="flip-right" data-aos-easing="ease-in-sine" data-aos-duration="2000" style={{ background: 'rgba(255, 232, 223, 0.7)'}}>
                <div className="rounded-pill h-100 p-3" style={{ background: 'rgba(249, 245, 221, 0.2)', backdropFilter: 'blur(0.5px)', borderColor: 'rgba(91, 20, 21, 0.9)', borderWidth: '6px', borderStyle: 'solid', borderSpacing:'2px' }}>
                    <div className="py-5 d-flex flex-column justify-content-center align-items-center h-100 text-center">
                        <img src={initial} alt="logo" style={{ width: '120px' }} />
                        <div>
                            <p className="cormorantGaramond fw-bold" style={{ letterSpacing: '0.1rem' }}>THE WEDDING OF</p>
                        </div>
                        <div>
                            <p className="vidaloka" style={{fontSize: '1.9rem'}}>Anonim & Anomnin</p>
                            <p className="andada text-black-50">31-12-2030</p>
                        </div>
                        <RiArrowDownDoubleLine className={`mt-4 ${style.scrollLine}`}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Opening
