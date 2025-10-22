import style from './index.module.css';
import {AiOutlineClose} from 'react-icons/ai';

const ModalImg = ({ isPhotoClicked, setisPhotoClicked, clickedPhoto }) => {
    const closeModal = () => { 
        setisPhotoClicked(false);
    }

    return (
        <>
            {
                isPhotoClicked ? 
                    <div className={ `${ style.bgDark50 } w-100 vh-100 d-flex justify-content-center  align-items-center top-0 position-fixed` } style={{zIndex: 10}}>        
                        <img src={ clickedPhoto } className="w-75 position-relative" alt="prewedding"/> 
                        <button className="bg-transparent trasnlate-middle-y fs-4 trasnlate-middle-x end-0 top-0 position-absolute me-3 mt-3 rounded-circle px-3 pb-1 text-white border-0 fw-bold" onClick={ closeModal } style={{zIndex: 10}}><AiOutlineClose className='text-white'/></button>
                    </div> 
                    : 
                    null
            }
        </>
    )
}

export default ModalImg
