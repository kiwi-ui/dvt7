import style from './index.module.css';

const Loading = () => {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <span className={`${style.loader}`}></span>
    </div>    
  )
}

export default Loading
