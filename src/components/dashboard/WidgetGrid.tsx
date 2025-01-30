'use client'

import { SimpleWidget } from "./SimpleWidget"
import { IoCartOutline } from "react-icons/io5";
import { useAppSelector } from "@/store";

export const WidgetGrid = () => {

  const inCart = useAppSelector(state => state.counter.count)
  return (
    <div className="flex flex-wrap p-2 items-center justify-center">

       <SimpleWidget
       title={`${inCart}`}
       subTitle="productos en el carrito"
       label="contador"
       icon={<IoCartOutline />}
       href="/dashboard/counter"
      />


      </div>
  )
}
