'use client'


import { CartCaunter } from "@/shoping-cart";
import { useState } from "react";

export default function CounterPage() {

  const [count, setCount] = useState(5);

 
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CartCaunter value = {37} />
       
    </div>
  );
}