// import { createSlice } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";

// const initialState = {
//     cartCount: 0,
//     cart: [],
//     totalPriceOfCartItems: 0,
//     subTotalPriceOfCartItems: 0
// };

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addToCart: (state, action) => {
//             // const existingCartItem = state.cart.find(item => item.id === action.payload.id);

//             // // Increment Cart Quantity if it already exists
//             // if(existingCartItem)
//             //     existingCartItem.map(cart => ({ ...cart, quantity: cart.quantity + 1 }));
//             // else    
//             //     state.cart.push({
//             //         ...action.payload,
//             //         quantity: 1    
//             //     });
//             state.cart = [...state.cart, action.payload]; 
//         }
//     },
// })

// // fetchCartItems(state, action) {},
// //         deleteCartItem(state, action) {},
// //         clearCart(state, action) {}

// export const { addToCart } = cartSlice.actions;
// export const cartReducer = cartSlice.reducer;

// console.log(addToCart({ id: 123, title: 'Hello World', image: "Source" }), "cart")
// // {type : "posts/createPost", payload : {id : 123, title : "Hello World"}}
