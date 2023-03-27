import {Container,Navbar as NavbarBs, Nav, Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
 import {HiShoppingCart} from 'react-icons/hi'
export function Navbar(){
    return(
        <>
        <NavbarBs sticky='top' className='bg-white shadow-sm mb-3'>
            <Container>
<Nav>
<Nav.Link  to='/'as={NavLink}>Home</Nav.Link>
<Nav.Link  to='/store'as={NavLink}>Store</Nav.Link>
<Nav.Link  to='/about'as={NavLink}>About</Nav.Link>
</Nav>
<Button style={{width:"3rem", height:"3rem"}}><HiShoppingCart fontSize='1.5rem' />
<div className='rounded-circle bg-danger d-flex justify-content-center
align-items-center
'
style={{color:"white",width:"1.5rem",height:"1.5rem",
position:"relative",
bottom:0,
right:"-1rem",

}}
>0</div>
</Button>
            </Container>
        </NavbarBs>
        </>
    )
}