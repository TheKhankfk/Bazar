import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    productsData :[],
    userInfo: null,
};

export const bazarSlice = createSlice({
    name: "bazar",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const item = state.productsData.find( 
                (item) => item._id === action.payload._id
            );

            if(item){
                item.quantity += action.payload.quantity
            }
            else{
                state.productsData.push(action.payload)
            }  
        },
        resetCart: (state) =>{
            state.productsData =[];
        },
        deleteItem:(state,action) => {
            state.productsData = state.productsData.filter(
                (item) => item._id !== action.payload
            );
        },
        incrementQuantity:(state,action) => {
            const item = state.productsData.find(
                (item) => item._id ===action.payload._id
            );
            if(item){
                item.quantity++;
            }
        },
        decermentQuantity: (state,action) =>{
            const item = state.productsData.find(
                (item)=> item._id ===action.payload._id
            );
            if(item.quantity===1){
                item.quantity=1
            }
            else{
                item.quantity--;
            }
        },
        addUser: (state,action) => {
            state.userInfo = action.payload
        },
        removeUser:(state) =>{
           state.userInfo = null
        },
    },
})

export const {
    addUser,
    removeUser,
    addToCart,
    deleteItem,
    resetCart,
    incrementQuantity,
    decermentQuantity
} = bazarSlice.actions;
export default bazarSlice.reducer;