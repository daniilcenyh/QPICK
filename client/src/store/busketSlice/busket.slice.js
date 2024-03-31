import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems: localStorage.getItem("busket") ? JSON.parse(localStorage.getItem("busket")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}

const busketSlice = createSlice({
    name:"busket",
    initialState,
    reducers: {
        addToBusket: (state, { payload : product }) => {
            //получение индекса элемента 
            const itemIndex = state.cartItems.findIndex(
                (event) => event.id === product.id
            );
                // если товар уже есть
            if(itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.info(`количестов ${product.title} в корзине увеличелось`, {
                    position: "bottom-left",
                })
            }else {
                const tempProduct = { ...product, cartQuantity : 1 };
                state.cartItems.push(tempProduct)
                toast.success(`${product.title} добавлен в корзину`, {
                    position: "bottom-left",
                })
            }

            localStorage.setItem("busket", JSON.stringify(state.cartItems))
        },
        removeFromBusket: (state, { payload : product }) => {
            const removedItems = state.cartItems.filter((event) => event.id !== product.id);

            state.cartItems = removedItems;
            localStorage.setItem("busket", JSON.stringify(state.cartItems))

            toast.error(`${product.title} удалён из корзины`, {
                position: "bottom-left",
            })
        },
        decreaseBusketItem: (state, { payload : product }) => {
            const itemIndex = state.cartItems.findIndex(
                (event) => event.id === product.id
            ); 

            if (state.cartItems[itemIndex].cartQuantity > 1){
                state.cartItems[itemIndex].cartQuantity -= 1;

                toast.info(`кол-во ${product.title} уменьшено`, {
                    position: "bottom-left",
                })
            }else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const removedItems = state.cartItems.filter((event) => event.id !== product.id);

                state.cartItems = removedItems;
                
                toast.error(`${product.title} удалён из корзины`, {
                    position: "bottom-left",
                })
            }
            localStorage.setItem("busket", JSON.stringify(state.cartItems))
        },
        getTotals(state, { payload : product }) {
            let { total,quantity } = state.cartItems.reduce((busketTotal, busketItem) => {
                const { price, cartQuantity } = busketItem;
                const itemTotal = price * cartQuantity;

                busketTotal.total += itemTotal;
                busketTotal.quantity += cartQuantity;

                return busketTotal;
            }, 
            {
                total : 0,
                quantity: 0
            })
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        }
    }
});

export const { actions, reducer } = busketSlice;
export const { getTotals } = busketSlice.actions;
