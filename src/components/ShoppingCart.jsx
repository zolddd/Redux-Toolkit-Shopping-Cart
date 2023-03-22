import { useSelector, useDispatch } from "react-redux";
import { courseSlice, deleteToCart } from "../features/courses/coursesSlice";
export default function ShoppingCart() {

  const state = useSelector((state) => state.courses);
  let {cart}=state;
  const dispatch = useDispatch();
  console.log("HOLA, IMPRIMINEDO CARRITO DESDE CARTSHOPPING")
  console.log(cart)

  const handlerClick=(course)=>{
    dispatch(deleteToCart(course))
    console.log("impresion para ver si elimino: ");
    console.log("asi se ve el carrito: ");
    console.log(cart);
  }

  return (
    <>
      <h1>ShoppingCart</h1>
      {
        cart.map((course) => (
          <div key={course.id}>
            <h1>{course.title}</h1>
            <h2>{course.quantity}</h2>
            <button onClick={()=>{handlerClick(course)}}>delete</button>
          </div>
        ))
      }
      
    </>
  );
}
