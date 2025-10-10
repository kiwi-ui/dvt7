import photo1 from '../../assets/1.png';
import Photos from '../../utlis/gallery';
const Gallery = () => {
  return (
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
                        <img className="w-100 rounded-4" src={photo.image}/>
                    </div>
                ))
            } 
            </div>
        </div>
    </section>
  )
}

export default Gallery
