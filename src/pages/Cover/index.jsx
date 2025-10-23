import { CiLock, CiUnlock } from 'react-icons/ci';
import style from './index.module.css';
import logo from '../../assets/initial.webp';

const Cover = ({name, isPlaying, setOpenMainPage, setIsPlaying, setScrollBehavior}) => {
  const handleOpenMainPage = (e) => {
    e.preventDefault();
    setIsPlaying(true);
    setTimeout(() => {
      setOpenMainPage(true);
      setScrollBehavior(true);
      document.documentElement.requestFullscreen()
    }, 1500)
  }; 

  return (
      <section className={`position-relative text-center cover`} style={{ height: '100dvh' }}>    
        <div className={`${style.cover} d-flex flex-column justify-content-center align-items-center h-100 textPrime`}>
          <img src={logo} className="w-25 mb-4" alt="initial"  data-aos="fade-up" data-aos-duration="3000" />

          <div style={{ zIndex: 2 }} >
            <p className="cormorantGaramond mb-0 fw-semibold fs-5" data-aos="zoom-in-down" data-aos-duration="2000">The Wedding of</p>
            <p className="vidaloka my-3" style={{  fontSize: '2rem', letterSpacing: '0.2rem' }} data-aos="fade-up-right" data-aos-duration="3000">
              Anonim & Anonim
            </p>
          </div>

          <div className={`px-5 pb-3 rounded-3 andada`} style={{ fontSize: '0.72rem', zIndex: 2 }}>
            <div className="" data-aos="fade-zoom-in" data-aos-duration="3000" data-aos-delay="1400">
              <p className="mb-0">Kepada yang terhormat</p>
              <p className="mb-0">Bapak/Ibu/Saudara/i</p>
              <p className="my-1 mb-0 mt-1 fs-4 py-4">{name}</p>
            </div>
          </div>
          
          <button className="shadow-lg bgButtonPrime border-0 d-flex flex-row align-items-center gap-2 text-black cormorantG py-1 px-3 text-white" type="button" onClick={handleOpenMainPage} style={{ zIndex: 2, fontSize: '1.1rem' }} data-aos="fade-up" data-aos-duration="1800">
            {isPlaying ? <CiUnlock className='fw-bold'/> : <CiLock className='fw-bold'/>} <p className="mb-0">Buka Undangan</p>
          </button>
        </div>
      </section>
  )
}

export default Cover
