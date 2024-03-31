// import { useProducts } from "../../hooks/useProducts";
// import { useSelector } from "react-redux";
import { useGetAllProductsQuery } from "../../store/productSlice/productsAPI";

import Card from "../../components/card/Card";

import "./home.css"
import { useState } from "react";
import Modal from "../../components/modal/Modal";

export default function Home() {
    const {data, error, isLoading} = useGetAllProductsQuery();
    
    const [dataModal, setDataModal] = useState([]);
    const [openModal,setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(!openModal);
    }

    const handleDataModal = (product) => {
        setDataModal(product)
    }
    return (
        <div className="home__container">
            {/* модальное окно */}
            
                {
                    openModal ?  
                        <div className="blur__block">
                            <Modal dataModal={dataModal} handleOpenModal={handleOpenModal}/>
                        </div>
                    : ""
                    
                }
            
            
            {
                isLoading ? 
                    (<p className="loader"></p>) : 

                error ? 
                    (<p>An error occured {error}</p>) : 

                (<div className="catalog__block">
                    {
                        data?.map((product,index) => {
                            return (
                            // <div key={index} onClick={() => {
                            //     handleDataModal(product)
                            //     handleOpenModal(!openModal)
                            // }}>
                                <Card
                                     title={product.title}
                                     img={product.img}
                                     price={product.price}
                                     rate={product.rate}
                                     key={index} 
                                     id={product.id}
                                     product={product}
                                     handleDataModal={handleDataModal}
                                     handleOpenModal={handleOpenModal}
                                     openModal={openModal}
                                 /> 
                        // </div>
                        )})
                    }
                </div>)
            }
        </div>
    );
}

