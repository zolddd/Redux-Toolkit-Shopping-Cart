import axios from "axios";

export const getshoppingCarts= async()=>{
    return await axios.get(`http://localhost:8080/shoppingCart/getAll`)
}
export const getshoppingCart = async (id) => {
  return await axios.get(`http://localhost:8080/shoppingCart/getId/${id}`);
};
export const createShoppingCart= async(shoppingCart)=>{
  return await axios.post(`http://localhost:8080/shoppingCart/create`,shoppingCart)
}
export const deleteShoppingCart= async(id)=>{
  return await axios.delete(`http://localhost:8080/shoppingCart/delete/${id}`);
}
export const updateShoppingCart= async(id,shoppingCart)=>{
  return await axios.put(`http://localhost:8080/shoppingCart/update/${id}`,shoppingCart);
}