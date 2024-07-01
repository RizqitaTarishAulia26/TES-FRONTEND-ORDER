import React from 'react'
import Image from "next/image";
import pilihmenu from "../public/pili.svg";
import Link from "next/link";


const Pilihmenu = () => {
  return (
    <div className="container-pilihmenu">
      <Image src={pilihmenu} alt="pilihmenu" />

    </div>
  )
}

export default Pilihmenu;
