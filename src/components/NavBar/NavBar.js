import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
return (
    <nav> 
    <h3> Ecommerce</h3>
    <div className="botones">
    <button>Hamburguesa</button>
    <button>Bebida</button> 
    <button>Cerveza</button>
    </div>
    <CartWidget />
    </nav>
)
}
export default NavBar