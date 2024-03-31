import { useFavorites } from "../../hooks/useFavorites"

import Card from '../../components/card/Card'
// import Modal from "../../components/modal/Modal";

import "./favorited.css"

export default function Favorited() {
    const { favorites } = useFavorites()

    return (
      <div className="favorite__container">
        <h1>Избраное</h1>
        <div className="favorite__block">
            {
              favorites.map((product,index) => {
                return(
                      <Card 
                        key={index}
                        product={product}
                        title={product.title}
                        price={product.price}
                        img={product.img}
                        rate={product.rate}
                      />
                )
              })
            }
        </div>
      </div>
      
    )
}


