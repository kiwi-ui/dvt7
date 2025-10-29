import { AiFillInstagram } from 'react-icons/ai';
import style from './index.module.css';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaItunesNote } from 'react-icons/fa';
import closing from '../../assets/6.png';

const Closing = ({songIndex}) => {
  return (
    <section className={`${style.bgClosing} position-relative py-5`}>
        <div className="container text-center caudex">
            <div className="">
              <img className={`rounded-top-circle px-2 ${style.imageClosing}`} src={closing} alt="" data-aos="zoom-in" data-aos-duration="3000" />
            </div>

            <div className="">
              <p className="mt-5" data-aos="fade-up" data-aos-duration="3000">Menjadi sebuah kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dalam hari bahagia ini. Terima kasih atas segala ucapan, doa, dan perhatian yang diberikan.</p>
              <p className="vidaloka fs-2" data-aos="fade-down" data-aos-duration="3000">Anonim & anonim</p>
            </div>

          <div className="border-top w-50 mx-auto border-prime border-2 mt-4 pb -5">
            <p className={`${style.fst} mt-3 mb-3`} data-aos="zoom-in" data-aos-duration="3000">Made With ♥ Divition</p>
            
            <div className="d-flex flex-row gap-2 justify-content-center">
              <a className="p-2 bgIcon rounded-circle d-flex align-content-center" href="https://www.instagram.com/yanggaraa/">
                <AiFillInstagram className="textPrime fs-3"/>
              </a>
              <a className="p-2 bgIcon rounded-circle d-flex align-content-center" href="https://wa.link/0gd2cu">
                <IoLogoWhatsapp className="textPrime fs-3"/>
              </a>
              {songIndex ==  0 &&
                <a className="p-2 bgIcon rounded-circle d-flex align-content-center" target='blank' href="https://www.youtube.com/watch?v=tX73H2FRcK8">
                  <FaItunesNote className="textPrime fs-3"/>
                </a>
              }
              {songIndex ==  1 &&
                <a className="p-2 bgIcon rounded-circle d-flex align-content-center" target='blank' href="https://www.youtube.com/watch?v=Cj7E2YB3pe0">
                  <FaItunesNote className="textPrime fs-3"/>
                </a>
              }
              {songIndex ==  2 &&
                <a className="p-2 bgIcon rounded-circle d-flex align-content-center" target='blank' href="https://www.youtube.com/watch?v=INnehEK0Yec">
                  <FaItunesNote className="textPrime fs-3"/>
                </a>
              }
            </div>
          </div>
        </div>
    </section>
  )
}

export default Closing
