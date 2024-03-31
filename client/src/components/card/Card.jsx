import "./card.css"

import { useNavigate } from 'react-router-dom';

import { GoStarFill } from "react-icons/go";

import { useActions } from "../../hooks/useActions";

import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { useFavorites } from "../../hooks/useFavorites";

function Card({ title ,price,img,rate,id, product,handleDataModal,handleOpenModal,openModal }) {
    const { favorites } = useFavorites()
    const { addToBusket,addToFavorite,removeFromFavorite } = useActions()

    const navigate = useNavigate();
    
    const handleAddToBusket = (product) => {
        addToBusket(product)
        navigate("/busket")
    }

    const handleToogleFavorite = (product) => {
        if (favorites.includes(product) || favorites.some((event) => event.id === product.id)) {
            removeFromFavorite(product);
        } else {
          addToFavorite(product);
        }
    }

  return (
    <article className="card__container">
        <img src={img} 
            alt={title} 
            onClick={() => {
                handleDataModal(product)
                handleOpenModal(!openModal)
            }} />
        <section id="card__block">
            <div className="title__price">
                <h3>{title}</h3>
                <strong>{price} ₽</strong>
            </div>
        </section>
        <section id="card__block">
            <div className="rate__block">
                <div style={{display: "flex", alignItems: "center",textAlign: "center",gap:".3rem"}}>
                    <GoStarFill style={{color : "rgb(255, 165, 66)"}}/>
                    <p>{rate}</p>
                </div>
                <div style={{display: "flex", alignItems: "center",textAlign: "center",gap:"1rem"}}>
                    <button onClick={() => handleAddToBusket(product)}>Купить</button>
                    <button onClick={() => {handleToogleFavorite(product)}} >
                        {
                            (favorites.includes(product) || favorites.some((event) => event.id === product.id)) ? <IoMdHeart fontSize={25} color='red'/>  : <IoMdHeartEmpty fontSize={25} color='red'/> 
                        }
                    </button>
                </div>
                
            </div>
            
        </section>
    </article>
  )
}

export default Card
