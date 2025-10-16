import { useEffect, useState } from 'react'
import './App.css'
import { useParams } from 'react-router-dom';
// import Cover from './pages/Cover';
import Opening from './pages/main/Opening'
// import Surah from './components/Surah';
// import Couple from './pages/Couple';
// import Schedule from './pages/Schedule';
// import Events from './pages/Events';
// import Wish from './pages/Wish';
import { Toaster } from 'react-hot-toast';
// import Closing from './components/Closing';
import  { randomIndex, useAudioRefService } from './service/audioRefService';
// import MusicPlayer from './components/MusicPlayer';
import Aos from 'aos';
import '../node_modules/aos/dist/aos.css';
import Cover from './pages/Cover';
import Surah from './pages/Surah';
import Couple from './pages/Couple';
import Story from './pages/Story';
import SaveDate from './pages/SaveDate';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Gift from './pages/Gift';
import Wish from './pages/Wish';
import Closing from './pages/Closing';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrollBehavior, setScrollBehavior] = useState(false);
  const [openMainPage, setOpenMainPage] = useState(false);
  const audioRef = useAudioRefService();
  const { name } = useParams();
  const songIndex = randomIndex;
  const decodedName = decodeURIComponent(name).replace(/\+/g, " ");
  const capitalizedName = decodedName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    useEffect(() => {
      Aos.init({
        once: false,   
        mirror: false,
      });

    Aos.refresh();
  }, []);
  
  return (
     <>
       {
          !openMainPage ?
          <>
            <Cover name={capitalizedName} isPlaying={isPlaying} setOpenMainPage={setOpenMainPage} setIsPlaying={setIsPlaying} setScrollBehavior={setScrollBehavior} /> 
          </>
          
          :
          <>
          <section className='position-relative mainPage' style={{ height: '100dvh', scrollBehavior: scrollBehavior ? 'smooth' : 'auto'}}>
            <Opening />
            <MusicPlayer audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />    
            <Surah />    
            <Couple />
            <Story />
            <SaveDate />
            <Events />
            <Gallery />
            <Gift />
            <Wish />
            <Closing songIndex={songIndex}/>
          </section>

          </>
          // <section className='position-relative' style={{ height: '100dvh'}}>
          //   <Opening />
          //   <Surah />
          //   <Couple />
          //   <Schedule />
          //   <Events />
          //   <Wish />
          //   <Closing 
          //   songIndex={randomIndex} />
          //   <MusicPlayer audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
          // </section>
        }
       <Toaster position="top-center" />
    </>
  )
}

export default App
