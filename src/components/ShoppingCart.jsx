import { useSelector, useDispatch } from "react-redux";

export default function ShoppingCart() {
  const state = useSelector((state) => state.courses);
  let {cart}=state;
  console.log("imprimiendo carrito desde cart")
  console.log(cart)

  const handlerClick=(course)=>{
    console.log("eliminado")
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
