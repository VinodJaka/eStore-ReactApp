import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {
        category:"Men",
        items:["Coats","Jackets","Party Wear", "Shirts"]
    },
    {
        category:"Women",
        items:["Coats","Jackets","Party Wear", "Shirts"]
    },
    {
        category:"Kids",
        items:["Coats","Jackets","Party Wear", "Shirts"]
    },
   
]

const accordionSlice =createSlice({
    name:"AccordionSlice",
    initialState,
})

export default accordionSlice;