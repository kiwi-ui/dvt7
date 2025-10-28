import { MdHome } from "react-icons/md";
import style from './index.module.css';

const Events = () => {
  return (
    <section>
        <div className="bgStory">
          <div className="py-5 px-4">
            <div className={`text-center position-relative mx-2 text-white ${style.openingContainer} mx-auto`}>
              <div className={`${style.bg} px-4 rounded-pill ${style.borderEvents}`} style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
                <div className={`text-center tetx-white ${style.detail} textPrime`}>
                    <h2 className="vidaloka mb-0 fw-medium" style={{ fontSize: '2.3rem' }} data-aos="zoom-in-up" data-aos-duration="3000">Akad Nikah</h2>
                    <p className="caudex mb-2" data-aos="zoom-in-up" data-aos-duration="3000">Minggu</p>
                    <p className="analogue mb-0" style={{ fontSize: '2.5rem' }} data-aos="zoom-in-up" data-aos-duration="3000">29</p>
                    <p className="caudex mb-0" data-aos="zoom-in-down" data-aos-duration="2000" data-aos-delay="1000">Desember 2026</p>
                    <p className="caudex mb-0" data-aos="zoom-in-down" data-aos-duration="2000" data-aos-delay="1000">10.00 WIB - Selesai</p>
                </div>

                <div className={`${style.divider} textPrime d-flex gap-1 text-center mx-4 py-4 justify-content-center align-items-center position-relative`} style={{zIndex:10}} data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="1500" data-aos-easing="ease-out-cubic">
                  <span>
                    <MdHome size={25} className=''/>
                  </span>
                </div>
                
                <div className={`mb-5 ${style.detail} caudex`}>
                  <div className={`${style.detail} textPrime`}>
                    <h3 className='text-center fw-medium' style={{zIndex: 10}} data-aos="zoom-in-up" data-aos-duration="3000">Sportorium UMY</h3>
                    <p style={{zIndex: 10}} data-aos="zoom-in-up" data-aos-duration="3000">Jl. Brawijaya Ngebel Tamantirto Kec. Kasihan, Kabupaten Bantul, Daerah Istimewa Yogyakarta</p>
                  </div>

                  <button className={`btn rounded-pill px-4 text-white fw-medium ${style.bgButton}`} type="button" data-aos="zoom-in-down" data-aos-duration="3000">Lihat Lokasi</button>
                </div>
              </div>
            </div>
          </div>

          <div className="py-5 px-4">
            <div className={`text-center position-relative mx-2 text-white  ${style.openingContainer} mx-auto`}>
              <div className={`${style.bg} px-4 rounded-pill ${style.borderEvents}`} style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
                <div className={`text-center tetx-white ${style.detail} textPrime`}>
                    <h2 className="vidaloka mb-0 fw-medium" style={{ fontSize: '2.3rem' }} data-aos="zoom-in-up" data-aos-duration="3000">Resepsi</h2>
                    <p className="caudex mb-2" data-aos="zoom-in-up" data-aos-duration="3000">Senin</p>
                    <p className="analogue mb-0" style={{ fontSize: '2.5rem' }} data-aos="zoom-in-up" data-aos-duration="3000">30</p>
                    <p className="caudex mb-0" data-aos="zoom-in-down" data-aos-duration="2000" data-aos-delay="1000">Desember 2026</p>
                    <p className="caudex mb-0" data-aos="zoom-in-down" data-aos-duration="2000" data-aos-delay="1000">19.00 WIB - Selesai</p>
                </div>

                <div className={`${style.divider} textPrime d-flex gap-1 text-center mx-4 py-4 justify-content-center align-items-center position-relative`} style={{zIndex:10}} data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="1500" data-aos-easing="ease-out-cubic">
                  <span>
                    <MdHome size={25} className=''/>
                  </span>
                </div>
                
                <div className={`mb-5 ${style.detail} caudex`}>
                  <div className={`${style.detail} textPrime`}>
                    <h3 className='text-center fw-medium' style={{zIndex: 10}} data-aos="zoom-in-up" data-aos-duration="3000">Sportorium UMY</h3>
                    <p style={{zIndex: 10}} data-aos="zoom-in-up" data-aos-duration="3000">Jl. Brawijaya Ngebel Tamantirto Kec. Kasihan, Kabupaten Bantul, Daerah Istimewa Yogyakarta</p>
                  </div>

                  <button className={`btn rounded-pill px-4 text-white fw-medium ${style.bgButton}`} type="button" data-aos="zoom-in-down" data-aos-duration="3000">Lihat Lokasi</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Events
