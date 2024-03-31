import { useNavigate } from "react-router-dom";
import BusketCard from "../../components/busketcard/BusketCard";
import useBusket from "../../hooks/useBusket"
import "./busket.css"
import { useEffect } from "react";
import { useActions } from "../../hooks/useActions";

export default function Busket() {
  const { busket } = useBusket();
  const navigate = useNavigate()

  const busketData = busket.cartItems
  
  const { getTotals } = useActions()

  useEffect(() => {
    getTotals()
  },[busket])

  return (
    <div className="busket__container">
      <h1>Корзина</h1>
      <section id="busket__total__content">

        {/* busket card mapping */}
        {
          busketData.length < 1 ? <div className="nothing__buskrt__block">
            <h4>Ваша корзина пуста</h4>
            <button onClick={() => navigate("/")}>перейти в каталог</button>
            </div> : 
          <div className="total__card__block">
            {
              busketData.map((object,index) => {
                return (
                  <BusketCard
                    title={object.title}
                    key={index}
                    price={object.price}
                    id={object.id}
                    img={object.img}
                    count={object.cartQuantity}
                    product={object}
                  />
                )
              })
            }
          </div>
        }
        
        
        {/* total block */}
        <div className="total__block">

          <div className="white__block">
            <strong>Итого</strong>
            <p><strong>₽ {busket.cartTotalAmount}</strong> </p>
          </div>
          {
            busketData.length < 1 ? "" : <button>Перейти к оформлению</button>
          }
          
        </div>
      </section>
      
      
    </div>
  )
}


