import React from 'react'
import Image from "next/image";
import fotomenu from "../public/fotomenu.svg";
import Link from "next/link";


const Fotomenu = () => {
  return (
    <div className=".container-fotomenu">
      <Image src={fotomenu} alt="fotomenu" />
      <div className="flex gap-10">
      </div>
    </div>
  )
}

export default Fotomenu;
