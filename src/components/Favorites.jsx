import { useSelector, useDispatch } from "react-redux";
import { deleteToFavorites } from "../features/courses/coursesSlice";
export default function Favorites() {
  const state = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  /*el state, se puede acceder desde cualquier lugar sin tenerlo que pasarlo como parametro, simplemente se llama y ya */
  let {favorites}=state;

  const handlerClick = (el) =>{
    console.log("ELIMINANDO FAVORITOS")
    dispatch(deleteToFavorites(el))
    console.log(favorites)
  }

  console.log(favorites)
  return (
    <>
      <h1>Favorite</h1>
      {
        favorites.map((el) => (
          <div key={el.id}>
            <h1>{el.title}</h1>
            <button onClick={()=>{handlerClick(el)}}>delete</button>
          </div>
        ))
      }
    </>
  )
}
