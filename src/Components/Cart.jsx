import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import styles from "./Cart.module.css";

export const Cart = () => {
  const { CartItem, setCartItem } = useContext(CartContext);
  // const [products, setproducts] = useState([]);
  const [refesh, setrefesh] = useState("");

  return (
    <table className={styles.CartTable}>
      <tr>
        <th>Sr no</th>
        <th>Image</th>
        <th>Product Name</th>
        <th>Qty</th>
        <th>Total</th>
        <th>Remove</th>
      </tr>
      {CartItem.map((item,ind) => {
        return (
          <tr key={item.id}>
            <td>{ind+1}</td>
            <td>
              <img style={{ width: "80px", height: "60px" }} src={item.image} />
            </td>
            <td>{item.title}</td>
            <td>
              <button
                onClick={() => {
                  item.qty++;
                  setrefesh(Date.now());
                }}
              >
                +
              </button>
              {item.qty}
              <button
                onClick={() => {
                  if (item.qty > 1) item.qty--;
                  setrefesh(Date.now());
                }}
              >
                -
              </button>
            </td>
            <td>{item.qty * item.price}</td>
            <td>
              <button onClick={()=>{
                if(CartItem.length===1){
                  setCartItem([])
                  setrefesh(Date.now())
                }else{
                  let arr = CartItem.slice(ind)
                  setCartItem(arr)
                  setrefesh(Date.now())
                }
              }}>X</button>
            </td>
          </tr>
        );
      })}
    </table>
  );
};
