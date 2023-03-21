import { useSelector, useDispatch } from "react-redux";
export default function Favorites() {
  const state = useSelector((state) => state.courses);
  /*el state, se puede acceder desde cualquier lugar sin tenerlo que pasarlo como parametro, simplemente se llama y ya */
  let {favorites}=state;

  return (
    <>
      <h1>Favorite</h1>
      {
        favorites.map((el) => (
          <div key={el.id}>
            <h1>{el.title}</h1>
            <button>delete</button>
          </div>
        ))
      }
    </>
  )
}
