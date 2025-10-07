import React, { useState } from 'react'
import style from './index.module.css'
import { Stories } from '../../utlis/stories';
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Story = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section id='stories' className=' text-white h-100 d-flex justify-content-center align-items-center bgStory position-relative' style={{ zIndex: 5, position: 'relative' }}>
        <div className={`container ${style.borderStory} mx-3 position-relative`}>            
            {
              Stories.map((story, index) => (
                <div key={story.id} className={`my-5 py-5 ${activeIndex === index ? '' : 'd-none'}`}>
                  <h2 className='mb-4 text-center'>{story.title}</h2>
                  <p className="text-wrap" style={{ textAlign: 'justify' }}>{story.content}</p>
                </div>
              ))
            }

            <div className="position-absolute bottom-0 row w-100 ">
                <p className={`col-6 ${activeIndex === 0 ? 'opacity-0 disabled' : 'blinkingIcon'} `} onClick={() => setActiveIndex((page) => (page) === 0 ? 0 : page-1 )}><MdOutlineKeyboardDoubleArrowLeft size={30}/></p>
                <p className={`col-6 text-end ${activeIndex === Stories.length-1 ? 'opacity-0 disabled' : 'blinkingIcon'} `} onClick={() => setActiveIndex((page) => (page) === Stories.length ? Stories.length-1 : page+1 )}><MdOutlineKeyboardDoubleArrowRight size={30}/></p>
            </div>
        </div>

    </section>
  )
}

export default Story
