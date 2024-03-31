import './modal.css'

import { GoStarFill } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

import { useState } from "react";
import { useActions } from '../../hooks/useActions';
import { useFavorites } from '../../hooks/useFavorites';

// import useBusket from "../../hooks/useBusket"

function Modal({ handleOpenModal,dataModal }) {
    const [click,setClick] = useState(true);
    const [discripOpen, setDiscripOpen] = useState(false);
    const { addToBusket,removeFromBusket,addToFavorite,removeFromFavorite } = useActions();
    const { favorites } = useFavorites()

    const handleClick = (dataModal) => {
        if (click) {
            addToBusket(dataModal)
            setClick(!click)
        }else {
            removeFromBusket(dataModal)
            setClick(!click)
        }
    }

    const handleOpenDiscrip = () => {
        setDiscripOpen(!discripOpen);
    }

    const handleToogleFavorite = (product) => {
        if (favorites.includes(product) || favorites.some((event) => event.id === product.id)) {
            removeFromFavorite(product);
        } else {
          addToFavorite(product);
        }
    }

    return (
      <div className="modal__container">
          <div className="img__modal__block">
              <img src={dataModal.img} alt={dataModal.title} />
          </div>
          <div className="name__modal__block">
              <div id='naming'>
                  <h2>{dataModal.title}</h2>
                  <div className="rate__modal">
                      <GoStarFill style={{color : "rgb(255, 165, 66)",fontSize:"25px"}}/>
                      <strong>{dataModal.rate}</strong>
                  </div>
                  <IoMdClose onClick={() => {handleOpenModal(false)}} fontSize={25} cursor="pointer"/>
              </div>
              <div className="price__modal">
                <p className='price'>{dataModal.price} ₽</p>
                <button onClick={() => {handleToogleFavorite(dataModal)}} >
                    {
                        (favorites.includes(dataModal) || favorites.some((event) => event.id === dataModal.id)) ? <IoMdHeart fontSize={25} color='red'/>  : <IoMdHeartEmpty fontSize={25} color='red'/> 
                    }
                </button>
                {

                }
                
              </div>
              
              {
                click ? <button className='add__busket' onClick={() => handleClick(dataModal)}>добавить в корзину</button> : <button className='remove__busket' onClick={() => handleClick(dataModal)}>убрать из корзины</button>
              }
              <div className="discription__block">
                <div onClick={handleOpenDiscrip}>
                    <h3>Описание</h3>
                    {
                        discripOpen ? <IoIosArrowUp  style={{fontSize:"25px",cursor: "pointer"}} /> : <IoIosArrowDown style={{fontSize:"25px",cursor: "pointer"}}/>
                    }
                </div>
                {
                    discripOpen ? <p className='disciption'>{dataModal.discription}</p> : ""
                }
                
              </div>
          </div>
      </div>
    )
}

export default Modal;