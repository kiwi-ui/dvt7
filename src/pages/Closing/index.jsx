import { AiFillInstagram } from 'react-icons/ai';
import style from './index.module.css';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaItunesNote } from 'react-icons/fa';
import closing from '../../assets/6.png';

const Closing = ({songIndex}) => {
  return (
    <section className={`${style.bgClosing} py-5`} style={{ height: '100dvh' }}>
        <div className="container text-center my-5 caudex">
            <div className="w-100 pt-4 pb-4">
              <img className="rounded-top-circle h-100 w-75 px-2" src={closing} alt="" />
            </div>

            <div className="py-5">
              <p>Menjadi sebuah kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dalam hari bahagia ini. Terima kasih atas segala ucapan, doa, dan perhatian yang diberikan.</p>
              <p className="vidaloka fs-2">Dinda & Haikal</p>
            </div>

          <div className="border-top w-50 mx-auto border-warning animate__animated animate__fadeInUp animate__delay-1s mt-4">
            <p className={`${style.fst} mt-3 mb-3`}>Made With ♥ Divition</p>
            
            <div className="d-flex flex-row gap-2 justify-content-center">
              <a className="p-2 bgIcon rounded-circle d-flex align-content-center" href="https://www.instagram.com/yanggaraa/">
                <AiFillInstagram className="colorIcon fs-3"/>
              </a>
              <a className="p-2 bgIcon rounded-circle d-flex align-content-center" href="https://wa.link/0gd2cu">
                <IoLogoWhatsapp className="colorIcon fs-3"/>
              </a>
              {songIndex ==  0 &&
                <a className="p-2 bgIcon rounded-circle d-flex align-content-center" target='blank' href="https://www.youtube.com/watch?v=tX73H2FRcK8">
                  <FaItunesNote className="colorIcon fs-3"/>
                </a>
              }
              {songIndex ==  1 &&
                <a className="p-2 bgIcon rounded-circle d-flex align-content-center" target='blank' href="https://www.youtube.com/watch?v=Cj7E2YB3pe0">
                  <FaItunesNote className="colorIcon fs-3"/>
                </a>
              }
              {songIndex ==  2 &&
                <a className="p-2 bgIcon rounded-circle d-flex align-content-center" target='blank' href="https://www.youtube.com/watch?v=INnehEK0Yec">
                  <FaItunesNote className="colorIcon fs-3"/>
                </a>
              }
            </div>
          </div>
        </div>
    </section>
  )
}

export default Closing
