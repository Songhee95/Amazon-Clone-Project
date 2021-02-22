import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import "./Orders.css";
import { useStateValue } from "../stateProvider";
import Order from "./Order";
import { Link, useHistory } from "react-router-dom";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
  const [selected, setSelected] = useState({});
  const History = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    orders.map((item) => {
      if (item.id === e.target.value) {
        setSelected(item);
      }
    });
  };

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div className="orders">
      <h1>Your orders</h1>
      <div className="orders__order">
        {orders?.map((order) => (
          <button onClick={handleClick} value={order.id}>
            {order.id}
          </button>
        ))}
      </div>
      {selected && <Order order={selected} />}
    </div>
  );
}

export default Orders;
