import { Stack, Button } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import StoreItems from '../data/items.json'
import { formatCurrency } from "../services/format"
type CartItemProps={
    id:number,
    quantity:number

}
export function CartItem({id,quantity}:CartItemProps){

    const {removeFromCart,cartItems}=useShoppingCart()
    const items=StoreItems.find((item)=>item.id===id)
    if(items==null) return null

    return(
        <>
         <Stack  className="d-flex align-items-center"direction="horizontal" gap={2}>
<img src={items.imgUrl} alt=""  style={{
    width:"125px", height:"75px",objectFit:"cover"}}/>
<div className="me-auto">
    <div>
        {items.name}
        {quantity >1 &&(
            <span className="text-muted" style={{
                fontSize:".70rem"
            }}>{quantity}x</span>)}
    </div>
    <div className="text-muted" style={{
        fontSize:'.75rem'
    }}>
        {formatCurrency(items.price)}
    </div>
</div>
<div>
    {formatCurrency(items.price*quantity)}
</div>
<Button variant="danger" size='sm' onClick={()=>removeFromCart(items.id)}>X</Button>
   
         </Stack>
         <div className="ms-auto fw-bold fs5">
        Total:{
formatCurrency(cartItems.reduce((total,cartItem)=>{
    const item=StoreItems.find(i=>i.id===cartItem.id)
return total+(item?.price ||0) *cartItem.quantity
},0))
        }
     </div>
        </>
    )
}