import {Container,Navbar as NavbarBs, Nav, Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
 import {HiShoppingCart} from 'react-icons/hi'
import { useShoppingCart } from '../context/ShoppingCartContext'

export function Navbar(){
    
    const {openCart,cartQuantity}=useShoppingCart()
    
    return(
        <>
        <NavbarBs sticky='top' className='bg-white shadow-sm mb-3'>
            <Container>
<Nav>
<Nav.Link  to='/'as={NavLink}>Home</Nav.Link>
<Nav.Link  to='/store'as={NavLink}>Store</Nav.Link>
<Nav.Link  to='/about'as={NavLink}>About</Nav.Link>
</Nav>
<Button  onClick={()=>openCart()}style={{width:"3rem", height:"3rem"}}><HiShoppingCart fontSize='1.5rem' />
<div className='rounded-circle bg-danger d-flex justify-content-center
align-items-center
'
style={{color:"white",width:"1.5rem",height:"1.5rem",
position:"relative",
bottom:0,
right:"-1rem",

}}
>{cartQuantity}</div>
</Button>
            </Container>
        </NavbarBs>
        </>
    )
}