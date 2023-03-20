import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getData } from "../features/courses/coursesSlice";
import { getCourses } from "../api/course.cart";
import { useEffect } from "react";
export default function Courses() {
  const arreglo=useSelector(state=>state.courses)

 console.log("imprimiendo arreglo:")
 console.log(arreglo)
 /* let [v]=arreglo
 console.log("imprimiendo v:")
 console.log(v) */
 
/*  console.log("imprimiendo v:")
 console.log(v) */

  const dispatch = useDispatch();

  const handlerClick = (course) => {
    console.log("Añadido al carrito");
    console.log(course);
  };
  useEffect(() => {
    async function loadCourses() {
      let response = await getCourses();
      dispatch(getData(response.data));
     
    }
    loadCourses();
  }, []);

  const renderMain = () => {
    let [v]=arreglo
    console.log("imprimiendo v:")
    console.log(v);
    if (arreglo.length === 0) return <h1>No courses find</h1>;
    return v.map((course) => (
      <div key={course.id}>
        <h1>{course.title}</h1>
        <button onClick={() => handlerClick(course.id)}>add a cart</button>
      </div>
    ));
  };

  return <div>{renderMain()}</div>;
}
