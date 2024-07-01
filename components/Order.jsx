import React from 'react'
import Image from "next/image";
import order from "../public/order.svg";
import Link from "next/link";


const Order = () => {
  return (
    <div className=".container-order">
      <Image src={order} alt="order" />

    </div>
  )
}

export default Order;
