import photo1 from '../../assets/1.png';
import ModalImg from '../../components/ModalImg';
import Photos from '../../utlis/gallery';
const Gallery = ({ isPhotoClicked, setisPhotoClicked, clickedPhoto, setClickedPhoto }) => {
  const showImage = (param) => {
      setisPhotoClicked(true);
      setClickedPhoto(param.target.src);
  }

  return (
    <>
        <ModalImg isPhotoClicked={isPhotoClicked} setisPhotoClicked={setisPhotoClicked} clickedPhoto={clickedPhoto} />
        <section className="bgGallery py-4">
            <div className="container">
                <p className="text-center bohemeFloral fw-semibold textPrime" style={{ fontSize: '2.5rem' }}>Our Moments</p>
                <div className="row mb-4">
                    <img className="rounded-4" src={ photo1 } alt="" />
                </div>
                
                <div className="row px-2 g-4">
                {
                    Photos.map((photo, index) => (
                        <div className={` ${index === Photos.length-1 ? '' : 'col-6' } `} key={photo.id}>
                            <img className="w-100 rounded-4" src={photo.image} onClick={showImage} data-aos="zoom-in" data-aos-duration="2700" data-aos-delay={index}/>
                        </div>
                    ))
                } 
                </div>
            </div>
        </section>
    </>
  )
}

export default Gallery
