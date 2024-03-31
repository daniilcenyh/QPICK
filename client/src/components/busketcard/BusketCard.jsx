import "./busketcard.css"

import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";
import { BsBagX } from "react-icons/bs";
import { useActions } from "../../hooks/useActions";

export default function BusketCard({ title,price,img,id,count,product }) {
    const { removeFromBusket,decreaseBusketItem,addToBusket } = useActions();

  return (
    <article className='busket__card__conatiner'>
        <section id="busket__card__block">
            <div className="img__count">
                <img src={img} alt={title} width={145} height={135}/>
                <div className="counter__block">
                    <AiFillMinusCircle fontSize={30} cursor="pointer" color="rgba(255, 206, 127, 1)" onClick={() => decreaseBusketItem(product)}/>
                    <p>{count}</p>
                    <AiFillPlusCircle fontSize={30} cursor="pointer" color="rgba(255, 206, 127, 1)" onClick={() => addToBusket(product)}/>
                </div>
            </div>
        </section>
        <section id="busket__card__block">
            <div className="title__price__block">
                <h2>{title}</h2>
                <p>{price} ₽</p>
            </div>
        </section>
        <section id="busket__card__block">
            <div className="close__total__block">
                <BsBagX color="#DF6464" fontSize={20} cursor="pointer"  onClick={() => removeFromBusket(product)}/>
                <strong>{price*count} ₽</strong>
            </div>
        </section>
    </article>
  )
}



