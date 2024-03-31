import './header.css'

import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";

import { Link } from 'react-router-dom';
import useBusket from '../../hooks/useBusket';
import { useFavorites } from '../../hooks/useFavorites';

export default function Header() {
  const { busket } = useBusket()
  const { favorites } = useFavorites()

  return (
    <header>
        <section id="logo_block">
          <Link to="/"><h3>QPICK</h3></Link>
        </section>
        <section id="icons_block">
          <div>
            {
              favorites.length > 0 ? <p>{favorites.length}</p> : ""
            }
            <Link to="/favorite"><IoMdHeartEmpty style={{color : "rgb(131,131,131)", fontSize : "25px"}}/></Link>
          </div>
          
          <div>
            {
              busket.cartItems.length > 0 ? <p>{busket.cartTotalQuantity}</p> : ""
            }
            
            <Link to="/busket"><IoCartOutline style={{color : "rgb(131,131,131)", fontSize : "25px"}}/></Link>
          </div>
          
        </section>
    </header>
  )
}

