import React from 'react'
import Image from "next/image";
import sidebar from "../public/sidebar.svg";
import Link from "next/link";


const Sidebar = () => {
  return (
    <div className=".container-sidebar">
      <Image src={sidebar} alt="sidebar" />
    </div>
  )
}

export default Sidebar;
