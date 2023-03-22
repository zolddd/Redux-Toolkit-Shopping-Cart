import { useSelector, useDispatch } from "react-redux";
import { getData,addToCart,addToFavorites } from "../features/courses/coursesSlice";
import { getCourses } from "../api/course";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Courses() {
  const state = useSelector((state) => state.courses);
  const navigate=useNavigate();

  console.log("IMPRIMIENDO STATE")
  console.log(state)
  let {courses,cart}=state;
  /* arriba destructuramos el state para acceder a courses y cart */
  console.log("IMPRIMIENDO COURSES")
  console.log(courses)
  console.log("IMPRIMIENDO CART")
  console.log(cart)


  const dispatch = useDispatch();
 /*  el dispatch dispara la funcion o accion a ejecutar */
  
  const handlerClick = (course) => {
    console.log("Añadido al carrito");
    console.log(course)
    dispatch(addToCart(course));
    /* navigate("/cart") */
  };
  const handlerFavorite=(course)=>{
    dispatch(addToFavorites(course));
   /*  navigate("/favorite") */
  }
  const handler=()=>{
    console.log("lola");
    navigate("/cart")
  }
  const irFavoritos=()=>{
    navigate("/favorite")
  }

  useEffect(() => {
    async function loadCourses() {
      let response = await getCourses();
      console.log("imprimiendo response");
      console.log(response.data);
      dispatch(getData(response.data));
    }
    loadCourses();
  }, []);

  const renderMain = () => {
    let [v] = courses;
    /*V es el arreglo con los datos de la b, lo que se hizo arriba es destruturarlo*/
    console.log("imprimiendo v:");
    console.log(v);
  
    if (courses.length === 0) return <h1>No courses find</h1>;
    return v.map((course) => (
      <div key={course.id}>
        <h1>{course.title}</h1>
        <button onClick={() => handlerClick(course)}>add a cart</button>
        <button onClick={() => handler()}>ir a cart</button>
        <button onClick={() => handlerFavorite(course)}>add a favorites</button>
        <button onClick={() => irFavoritos(course)}>ir a favorites</button>
      </div>
    ))
  };

  return <div>{renderMain()}</div>;
}
