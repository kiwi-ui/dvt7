import surah from '../../assets/surah.png';
import style from './index.module.css';

const Surah = () => {
  return (
    <section style={{ zIndex: 5, position: 'relative' }} className={ `py-4 ${ style.bgSurah }` }>
        <div className={`${style.paddingPhone}`}>
            <div className="d-flex flex-column justify-content-center align-items-center py-4">
                <img className={`w-50 rounded-circle mx-auto mb-4 ${style.photoSurah}`} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" src={surah} alt="" srcset="" style={{  backdropFilter: 'blur(0.5px)', borderColor: 'rgba(91, 20, 21, 0.9)', borderWidth: '3px', borderStyle: 'solid', borderSpacing:'2px' }} />
                
                <div className='px-sm-5 text-center textPrime'>
                    <p className="caudex" data-aos="zoom-in" data-aos-duration="2500">"Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."</p>
                    <p className="caudex mb-0 fs-5" data-aos="fade-up" data-aos-duration="2900">QS. Ar-Rum Ayat 21</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Surah
