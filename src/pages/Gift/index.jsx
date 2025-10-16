import { cards } from "../../utlis/cards";
import code from '../../assets/cards/code.png';
import { useState } from "react";

const Gift = () => {
  const [showBar, setShowBar] = useState(false);
  const handleShowBar = () => {
    setShowBar(!showBar);
  }
  return (
    <section className="bgGift">
        <div className="container py-5">
            <div className="bgGallery text-center container rounded-4 p-4" style={{ backgroundSize: '130%' }}>
                <div>
                    <p className="vidaloka fs-1">Wedding Gift</p>
                    <p className="caudex">Doa restu Anda merupakan karunia yang sangat berarti bagi kami, dan jika memberi adalah ungkapan tanda kasih, Anda dapat memberi kado secara cashless.</p>
                    <button className="btn text-white bgButton rounded-pill px-4 d-flex justify-content-center align-items-center mx-auto" onClick={handleShowBar}>
                        <span>Klik Disini</span>
                    </button>
                </div>
                {showBar &&
                    <div>
                        {
                            cards.map((card, index) => (
                                <div key={index} className="text-center my-4 cards px-3 py-4 rounded-4">
                                    <div className="d-flex justify-content-end">    
                                        <img className="w-25" src={card.img} alt="" />
                                    </div>
                                    <div className="d-flex flex-column py-2 text-start">
                                        <img className="" style={{ width: '30px' }} src={code} alt="" />
                                        <p  className="mb-0">{card.owner}</p>
                                        <p>{card.number}</p>
                                    </div>
                                    <button role="button" className="d-flex flex-row gap-1 justify-content-center btn border border-2 w-50 ms-auto shadow">
                                        copy
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                }
            </div>
        </div>
    </section>
  )
}

export default Gift
