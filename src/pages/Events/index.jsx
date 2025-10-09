import { MdHome } from "react-icons/md";
import style from './index.module.css';

const Events = () => {
  return (
    <section>
        <div className="bgStory">
          <div className="py-5 px-4">
            <div className={`text-center position-relative mx-2 text-white`}>
              <div className={`${style.bg} px-4 rounded-pill ${style.borderEvents}`} style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
                <div className={`text-center tetx-white ${style.detail} textPrime`}>
                    <h2 className="vidaloka mb-0 fw-medium" style={{ fontSize: '2.3rem' }}>Akad Nikah</h2>
                    <p className="caudex mb-2">Minggu</p>
                    <p className="analogue mb-0" style={{ fontSize: '2.5rem' }}>29</p>
                    <p className="caudex mb-0">Desember 2026</p>
                    <p className="caudex mb-0">10.00 WIB - Selesai</p>
                </div>

                <div className={`${style.divider} textPrime d-flex gap-1 text-center mx-4 py-3 justify-content-center align-items-center position-relative`} style={{zIndex:10}}>
                  <span>
                    <MdHome size={25} className=''/>
                  </span>
                </div>
                
                <div className={`mb-5 ${style.detail} caudex`}>
                  <div className={`${style.detail} textPrime`}>
                    <h3 className='text-center pt-3 fw-medium' style={{zIndex: 10}}>Sportorium UMY</h3>
                    <p style={{zIndex: 10}}>Jl. Brawijaya Ngebel Tamantirto Kec. Kasihan, Kabupaten Bantul, Daerah Istimewa Yogyakarta </p>
                  </div>
                  <button className={`btn rounded-pill px-4 text-white fw-medium ${style.bgButton}`} type="button" >Lihat Lokasi</button>
                </div>
              </div>
            </div>
          </div>

          <div className="py-5 px-4">
            <div className={`text-center position-relative mx-2 text-white`}>
              <div className={`${style.bg} px-4 rounded-pill ${style.borderEvents}`} style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
                <div className={`text-center tetx-white ${style.detail} textPrime`}>
                    <h2 className="vidaloka mb-0 fw-medium" style={{ fontSize: '2.3rem' }}>Akad Nikah</h2>
                    <p className="caudex mb-2">Minggu</p>
                    <p className="analogue mb-0" style={{ fontSize: '2.5rem' }}>29</p>
                    <p className="caudex mb-0">Desember 2026</p>
                    <p className="caudex mb-0">10.00 WIB - Selesai</p>
                </div>

                <div className={`${style.divider} textPrime d-flex gap-1 text-center mx-4 py-3 justify-content-center align-items-center position-relative`} style={{zIndex:10}}>
                  <span>
                    <MdHome size={25} className=''/>
                  </span>
                </div>
                
                <div className={`mb-5 ${style.detail} caudex`}>
                  <div className={`${style.detail} textPrime`}>
                    <h3 className='text-center pt-3 fw-medium' style={{zIndex: 10}}>Sportorium UMY</h3>
                    <p style={{zIndex: 10}}>Jl. Brawijaya Ngebel Tamantirto Kec. Kasihan, Kabupaten Bantul, Daerah Istimewa Yogyakarta </p>
                  </div>
                  <button className={`btn rounded-pill px-4 text-white fw-medium ${style.bgButton}`} type="button" >Lihat Lokasi</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Events
