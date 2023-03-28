import { createContext, ReactNode, useContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";

type ShoppingCartProviderProps={
    children:ReactNode
}
type cartItem={
    id:number,
    quantity:number
}
type ShoppingCartContext={
    openCart:()=>void,
    closeCart:()=>void,
    getItemQuantity:(id:number)=>number,
    increaseCartQuantity:(id:number)=>void,
    decreaseCartQuantity:(id:number)=>void,
    removeFromCart:(id:number)=> void,
    cartQuantity:number,
    cartItems:cartItem[]
}


const ShoppingCartContext= createContext({} as ShoppingCartContext)

export function useShoppingCart(){
return useContext(ShoppingCartContext)
}


export function ShoppingCartProvider({children}:ShoppingCartProviderProps){

    const [cartItems,setCartItems]= useState<cartItem[]>([])
    const [isOpenCart,setIsOpenCart]=useState(false)


    function openCart(){
        setIsOpenCart(true)
    }
    function closeCart(){
        setIsOpenCart(false)
    }
const cartQuantity= cartItems.reduce((quantity,item)=>item.quantity+quantity,0)
    function getItemQuantity(id:number){
        
return cartItems.find((items)=> items.id==id)?.quantity || 0
    }

    function increaseCartQuantity(id:number){
 
        setCartItems(currItems=>{
            if(currItems.find(item=>item.id===id)==null){
return [...currItems,{id,quantity:1}]
            }
            else{
                return currItems.map(item=>{if(item.id===id){
                    return {...item,quantity:item.quantity+1}
                }
            else{return item}
            })
            }
          
        })
 
    }
   
 

    function decreaseCartQuantity(id:number){
        setCartItems(currItems=>{
            if(currItems.find(items=>items.id===id)?.quantity===1){
                return currItems.filter(item=>item.id!==id)
            }else{
                return currItems.map(items=>{
                    if(items.id===id){
                        return{...items,quantity:items.quantity-1}
                    }
                    else{
                        return items
                    }
                })
            }
           
         
        })
        
            }

function removeFromCart(id:number){
    setCartItems(currItems=>{
        return currItems.filter(item=>item.id!==id)
    })

}

return(
<ShoppingCartContext.Provider value={{getItemQuantity, increaseCartQuantity,decreaseCartQuantity,removeFromCart,cartItems,cartQuantity,openCart,closeCart}}>
{children}
<ShoppingCart isOpen={isOpenCart}/>
</ShoppingCartContext.Provider>)
}