import { CiLock, CiUnlock } from 'react-icons/ci';
import style from './index.module.css'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import coverImg from '../../assets/cover/cover.png';
import corner from '../../assets/corner.png';
import corner2 from '../../assets/corner2.png';
import corner3 from '../../assets/corner3.png';
import corner4 from '../../assets/corner4.png';
import cover from '../../assets/cover/cover.png';

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
      {/* <img className="position-absolute top-0 start-0" src={corner} alt="" />
      <img className="position-absolute top-0 end-0" src={corner2} alt="" />
      <img className="position-absolute bottom-0 start-0" src={corner3} alt="" />
      <img className="position-absolute bottom-0 end-0" src={corner4} alt="" />      */}
      {/* <img src={coverImg} className="w-75 start-50 top-50 translate-middle position-absolute" alt="cover" style={{ zIndex: '10' }} /> */}
        {/* <DotLottieReact
        src="https://lottie.host/d44e2b6d-383a-4743-9a71-da5b1fce1b47/I7XQgFVPtn.lottie"
        loop
        autoplay
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          zIndex: 10,
          pointerEvents: "none",
          objectFit: 'contain'
        }}
      /> */}
        <div className={`${style.cover} d-flex flex-column justify-content-center align-items-center h-100`}>
          <div style={{ zIndex: 2 }} >
            <p className="cormorantGaramond mb-0" data-aos="zoom-in-down" data-aos-duration="2000">The Wedding of</p>
            <p className="greatVibes fw-bold text-warning2 mb-4 mt-4" style={{  fontSize: '3.2rem', letterSpacing: '0.2rem' }} data-aos="fade-up-right" data-aos-duration="3000">
              Sisin
            </p>
            <p className="greatVibes fw-semibold text-warning2 mb-4 " style={{ fontSize: '2rem', letterSpacing: '0.2rem' }} data-aos="flip-left" data-aos-duration="2800">
              &
            </p>
            <p className="greatVibes fw-bold text-warning2 mb-4" style={{  fontSize: '3.2rem', letterSpacing: '0.2rem' }} data-aos="fade-up-left" data-aos-duration="3000">
              Ikhtiar
            </p>
          </div>

          <div className={`px-5 pb-3 rounded-3 andada`} style={{ fontSize: '0.72rem', zIndex: 2 }}>
            <div className="" data-aos="fade-zoom-in" data-aos-duration="3000" data-aos-delay="1400">
              <p className="mb-0">Kepada yang terhormat</p>
              <p className="mb-0">Bapak/Ibu/Saudara/i</p>
              <p className="my-1 text-warning2 fs-5 pt-2">{name}</p>
            </div>
          </div>
          
          <button className="btn shadow-lg bg-primary2 rounded-pill d-flex flex-row align-items-center gap-2 text-black cormorantG py-1 px-3 text-white fw-semibold" type="button" onClick={handleOpenMainPage} style={{ zIndex: 2 }} data-aos="fade-up" data-aos-duration="1800">
            {isPlaying ? <CiUnlock className=''/> : <CiLock />} <p className="mb-0">Buka Undangan</p>
          </button>
        </div>
      </section>
  )
}

export default Cover
